import { SITE } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="site-footer py-10">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col items-center gap-6">
          <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-center">
            <a href="#home" className="footer-link">
              Home
            </a>
            <a href="#about" className="footer-link">
              About
            </a>
            <a href="#projects" className="footer-link">
              Projects
            </a>
            <a href="#certificates" className="footer-link">
              Certificates
            </a>
            <a href="#contact" className="footer-link">
              Contact
            </a>
          </nav>

          <div className="flex space-x-6">
            <a href={SITE.githubUrl} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            <a href={SITE.linkedInUrl} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5V8h3v11zm-1.5-12.27c-.96 0-1.75-.79-1.75-1.76 0-.97.79-1.76 1.75-1.76.96 0 1.75.79 1.75 1.76 0 .97-.79 1.76-1.75 1.76zM20 19h-3v-5.6c0-3.37-4-3.11-4 0V19h-3V8h3v1.77c1.39-2.59 7-2.78 7 2.47V19z" />
              </svg>
            </a>

            <a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>
            </a>
          </div>

          <p className="text-xs text-[color:var(--color-text-dim)]">&copy; 2025 {SITE.name}. Crafted with accessibility, performance focus, and thoughtful design.</p>
        </div>
      </div>
    </footer>
  );
}
