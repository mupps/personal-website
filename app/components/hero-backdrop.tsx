"use client";

import { useEffect, useRef } from "react";

// A small, deterministic SVG keeps the backdrop visible before WebGL loads,
// when reduced motion is requested, and if graphics are unavailable.
function fallbackPaths() {
  const paths: string[] = [];
  const project = (x: number, y: number) => {
    const height = 20 * Math.sin(x / 90) * Math.cos(y / 110);
    return `${(400 + x * 0.72 - y * 0.46).toFixed(1)},${(140 + x * 0.16 + y * 0.32 - height).toFixed(1)}`;
  };
  for (let row = -7; row <= 7; row++) {
    paths.push(
      Array.from(
        { length: 45 },
        (_, i) => `${i ? "L" : "M"}${project(-300 + i * 14, row * 36)}`,
      ).join(" "),
    );
  }
  for (let column = -8; column <= 8; column++) {
    paths.push(
      Array.from(
        { length: 39 },
        (_, i) => `${i ? "L" : "M"}${project(column * 36, -270 + i * 14)}`,
      ).join(" "),
    );
  }
  return paths;
}

const paths = fallbackPaths();

export function HeroBackdrop() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const container = element;
    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection;
    if (connection?.saveData) return;

    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    let disposed = false;
    let loading = false;
    let failed = false;
    let visible = false;
    let delay: ReturnType<typeof setTimeout>;
    let disposeScene: (() => void) | undefined;
    let setActive = (_active: boolean) => {};

    async function initialize() {
      if (loading || disposed) return;
      loading = true;
      try {
        // Import the renderer only for a visible hero with motion enabled.
        const {
          WebGLRenderer,
          Scene,
          PerspectiveCamera,
          PlaneGeometry,
          MeshBasicMaterial,
          Mesh,
          DoubleSide,
        } = await import("three");
        if (disposed || motion.matches) {
          loading = false;
          return;
        }

        const renderer = new WebGLRenderer({
          alpha: true,
          antialias: true,
          powerPreference: "low-power",
        });
        renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
        const scene = new Scene();
        const camera = new PerspectiveCamera(40, 1, 0.1, 50);
        camera.position.set(0, 7, 12);
        camera.lookAt(1, 0, 0);

        const geometry = new PlaneGeometry(24, 16, 36, 24);
        geometry.rotateX(-Math.PI / 2);
        const material = new MeshBasicMaterial({
          color: getComputedStyle(container)
            .getPropertyValue("--accent-color")
            .trim(),
          wireframe: true,
          transparent: true,
          opacity: 0.7,
          side: DoubleSide,
        });
        const surface = new Mesh(geometry, material);
        scene.add(surface);
        const positions = geometry.attributes.position;
        let frame = 0;
        let active = false;
        let previous = 0;
        let phase = 0;
        const pointer = { x: 0, y: 0 };

        const draw = () => {
          for (let i = 0; i < positions.count; i++) {
            positions.setY(
              i,
              Math.sin(positions.getX(i) * 0.55 + phase * 0.18) * 0.4 +
                Math.cos(positions.getZ(i) * 0.6 - phase * 0.12) * 0.3,
            );
          }
          positions.needsUpdate = true;
          surface.rotation.y += (pointer.x * 0.05 - surface.rotation.y) * 0.04;
          surface.rotation.x += (pointer.y * 0.025 - surface.rotation.x) * 0.04;
          renderer.render(scene, camera);
        };

        const animate = (time: number) => {
          if (!active) return;
          frame = requestAnimationFrame(animate);
          if (time - previous < 1000 / 30) return;
          phase += Math.min(time - previous, 100) / 1000;
          previous = time;
          draw();
        };

        setActive = (next) => {
          if (active === next) return;
          active = next;
          cancelAnimationFrame(frame);
          if (active) {
            previous = performance.now();
            frame = requestAnimationFrame(animate);
          }
        };

        const resize = () => {
          const { width, height } = container.getBoundingClientRect();
          renderer.setSize(width, height, false);
          camera.aspect = width / Math.max(height, 1);
          camera.updateProjectionMatrix();
          draw();
        };
        const resizeObserver = new ResizeObserver(resize);
        resizeObserver.observe(container);
        const themeObserver = new MutationObserver(() => {
          material.color.set(
            getComputedStyle(container)
              .getPropertyValue("--accent-color")
              .trim(),
          );
          draw();
        });
        themeObserver.observe(document.documentElement, {
          attributes: true,
          attributeFilter: ["class"],
        });

        const hero = container.parentElement!;
        const move = (event: PointerEvent) => {
          if (event.pointerType !== "mouse") return;
          const bounds = hero.getBoundingClientRect();
          pointer.x = (event.clientX - bounds.left) / bounds.width - 0.5;
          pointer.y = (event.clientY - bounds.top) / bounds.height - 0.5;
        };
        const leave = () => {
          pointer.x = 0;
          pointer.y = 0;
        };
        hero.addEventListener("pointermove", move, { passive: true });
        hero.addEventListener("pointerleave", leave);

        const contextLost = (event: Event) => {
          event.preventDefault();
          failed = true;
          setActive(false);
          delete container.dataset.ready;
        };
        renderer.domElement.addEventListener("webglcontextlost", contextLost);
        container.appendChild(renderer.domElement);
        resize();
        container.dataset.ready = "true";

        disposeScene = () => {
          setActive(false);
          resizeObserver.disconnect();
          themeObserver.disconnect();
          hero.removeEventListener("pointermove", move);
          hero.removeEventListener("pointerleave", leave);
          renderer.domElement.removeEventListener(
            "webglcontextlost",
            contextLost,
          );
          geometry.dispose();
          material.dispose();
          renderer.dispose();
          renderer.forceContextLoss();
          renderer.domElement.remove();
          delete container.dataset.ready;
        };
        sync();
      } catch {
        // The static backdrop remains in place if the import or WebGL fails.
        failed = true;
        disposeScene?.();
      }
    }

    function sync() {
      const shouldAnimate =
        visible && !document.hidden && !motion.matches && !failed;
      setActive(shouldAnimate);
      if (motion.matches) delete container.dataset.ready;
      else if (disposeScene && !failed) container.dataset.ready = "true";
      clearTimeout(delay);
      if (shouldAnimate && !loading) delay = setTimeout(initialize, 250);
    }

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    observer.observe(container);
    document.addEventListener("visibilitychange", sync);
    motion.addEventListener("change", sync);

    return () => {
      disposed = true;
      clearTimeout(delay);
      observer.disconnect();
      document.removeEventListener("visibilitychange", sync);
      motion.removeEventListener("change", sync);
      disposeScene?.();
    };
  }, []);

  return (
    <div ref={ref} className="hero-backdrop" aria-hidden="true">
      <svg viewBox="0 0 700 350" preserveAspectRatio="xMidYMid slice">
        {paths.map((d, index) => (
          <path key={index} d={d} />
        ))}
      </svg>
    </div>
  );
}
