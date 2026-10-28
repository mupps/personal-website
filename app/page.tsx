import Image from "next/image";
import Link from "next/link";
import { HeroBackdrop } from "./components/hero-backdrop";
import { workExperiences } from "./about/work-data";

export default function Page() {
  const currentWork = workExperiences[0];
  return (
    <>
      <section className="home-intro" aria-labelledby="intro-heading">
        <HeroBackdrop />
        <div className="intro-layout">
          <div className="intro-content">
            <div className="intro-heading">
              <p className="eyebrow">Software Engineer · Frisco, Texas</p>
              <h1 id="intro-heading">Hi, I’m Armaan</h1>
            </div>
            <div className="intro-copy">
              <p>
                I build full-stack applications for critical systems, and enjoy
                turning ideas into things people can use.
              </p>
              <p>
                Outside of work, I’m usually exploring a side project, finding a
                new game, or looking for my next binge watch.
              </p>
              <Link href="/about" className="text-link">
                More about me <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <Image
            src="/profile.png"
            alt="Armaan"
            className="profile-photo"
            width={184}
            height={230}
            sizes="(max-width: 700px) 160px, 184px"
            priority
          />
        </div>
      </section>
      <section className="current-work" aria-labelledby="currently-heading">
        <h2 id="currently-heading" className="eyebrow">
          Currently
        </h2>
        <div>
          <p className="current-role">
            {currentWork.title} at {currentWork.company}.
          </p>
          <p className="muted">{currentWork.description}</p>
        </div>
      </section>
    </>
  );
}
