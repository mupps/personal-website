import { metaData, socialLinks } from "../lib/config";

const links = [
  { label: "GitHub", href: socialLinks.github },
  { label: "LinkedIn", href: socialLinks.linkedin },
  { label: "Medium", href: socialLinks.medium },
  { label: "Email", href: socialLinks.email },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <nav aria-label="Find me elsewhere">
        {links.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            {...(href.startsWith("https:")
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {label}
            <span aria-hidden="true"> ↗</span>
          </a>
        ))}
      </nav>
      <small>
        © {new Date().getFullYear()} {metaData.name}
      </small>
    </footer>
  );
}
