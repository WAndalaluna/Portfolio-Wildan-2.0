import { NAV_ITEMS, SITE } from "@/data/portfolio";

export function Header({
  activeSection,
  isMenuOpen,
  onToggleMenu,
  onNavigate,
  onToggleTheme,
  isScrolled,
}) {
  return (
    <header
      id="header"
      className={`site-header backdrop-blur-md fixed top-0 left-0 right-0 z-50 ${
        isScrolled ? "shadow-xl shadow-black/20" : ""
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            onNavigate("home");
          }}
          className="text-xl md:text-2xl font-semibold tracking-tight text-[color:var(--color-text)] hover:text-cyan-500 transition-colors"
        >
          {SITE.name}
        </a>

        <nav aria-label="Primary" className="hidden md:flex items-center space-x-8 font-medium">
          {NAV_ITEMS.map((item) => {
            const href = `#${item.id}`;
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={href}
                className={`nav-link ${isActive ? "text-[color:var(--color-text)]" : ""}`}
                aria-current={isActive ? "page" : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item.id);
                }}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Toggle theme"
            className="rounded-md p-2 text-[color:var(--color-text-dim)] hover:text-[color:var(--color-text)] focus:outline-none focus:ring focus:ring-cyan-500/40"
            onClick={onToggleTheme}
          >
            <svg
              className="theme-icon w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 3a1 1 0 0 1 1 1v1.083A7.002 7.002 0 0 1 19 12a7.002 7.002 0 0 1-6 6.917V20a1 1 0 1 1-2 0v-1.083A7.002 7.002 0 0 1 5 12a7.002 7.002 0 0 1 6-6.917V4a1 1 0 0 1 1-1z" />
            </svg>
          </button>

          <button
            id="mobile-menu-button"
            type="button"
            className="md:hidden rounded-md p-2 text-[color:var(--color-text-dim)] hover:text-[color:var(--color-text)] focus:outline-none focus:ring focus:ring-cyan-500/40"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={onToggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`${isMenuOpen ? "" : "hidden"} md:hidden px-6 pb-6 space-y-2`}
        aria-label="Mobile navigation"
      >
        {NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="mobile-link"
            onClick={(e) => {
              e.preventDefault();
              onNavigate(item.id);
            }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
}
