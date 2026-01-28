"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { ABOUT, CERTIFICATES, HERO, PROJECTS, SITE, SKILL_CATEGORIES } from "@/data/portfolio";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { CertificateCard } from "@/components/CertificateCard";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillCategoryCard } from "@/components/SkillCategoryCard";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(media.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

export default function Home() {
  const prefersReducedMotion = usePrefersReducedMotion();

  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [typewriterText, setTypewriterText] = useState(HERO.typewriterText);
  const projectsStripRef = useRef(null);
  const [canScrollProjectsLeft, setCanScrollProjectsLeft] = useState(false);
  const [canScrollProjectsRight, setCanScrollProjectsRight] = useState(false);

  const sectionIds = useMemo(() => ["home", "about", "projects", "certificates", "contact"], []);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    let i = 0;
    let intervalId;
    const startId = window.setTimeout(() => {
      setTypewriterText("");
      intervalId = window.setInterval(() => {
        i += 1;
        setTypewriterText(HERO.typewriterText.slice(0, i));
        if (i >= HERO.typewriterText.length) {
          window.clearInterval(intervalId);
        }
      }, 65);
    }, 0);

    return () => {
      window.clearTimeout(startId);
      if (intervalId) window.clearInterval(intervalId);
    };
  }, [prefersReducedMotion]);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));
        if (visible[0]?.target?.id) setActiveSection(visible[0].target.id);
      },
      {
        root: null,
        threshold: [0.1, 0.25, 0.4, 0.6],
        rootMargin: "-30% 0px -60% 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  const onToggleTheme = () => {
    const THEME_KEY = "wildan-theme";
    const next = !document.documentElement.classList.contains("theme-dark");
    document.documentElement.classList.toggle("theme-dark", next);
    window.localStorage.setItem(THEME_KEY, next ? "dark" : "light");
  };

  const onNavigate = (id) => {
    setIsMenuOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
  };

  const getProjectsScrollAmount = useCallback(() => {
    const strip = projectsStripRef.current;
    if (!strip) return 340;

    const firstCard = strip.firstElementChild;
    if (!firstCard) return 340;

    const cardWidth = firstCard.getBoundingClientRect().width;
    const styles = window.getComputedStyle(strip);
    const gapRaw = styles.columnGap || styles.gap || "0px";
    const gap = Number.parseFloat(gapRaw) || 0;

    return Math.max(260, Math.round(cardWidth + gap));
  }, []);

  const updateProjectsScrollButtons = useCallback(() => {
    const strip = projectsStripRef.current;
    if (!strip) return;

    const maxScrollLeft = strip.scrollWidth - strip.clientWidth;
    const current = strip.scrollLeft;

    setCanScrollProjectsLeft(current > 4);
    setCanScrollProjectsRight(current < maxScrollLeft - 4);
  }, []);

  useEffect(() => {
    updateProjectsScrollButtons();
    const strip = projectsStripRef.current;
    if (!strip) return;

    const onScroll = () => updateProjectsScrollButtons();
    const onResize = () => updateProjectsScrollButtons();

    strip.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      strip.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [updateProjectsScrollButtons]);

  const scrollProjects = (dir) => {
    const strip = projectsStripRef.current;
    if (!strip) return;
    strip.scrollBy({ left: dir * getProjectsScrollAmount(), behavior: prefersReducedMotion ? "auto" : "smooth" });
  };

  return (
    <>
      <a href="#home" className="skip-link">
        Skip to content
      </a>

      <Header
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen((v) => !v)}
        onNavigate={onNavigate}
        onToggleTheme={onToggleTheme}
        isScrolled={isScrolled}
      />

      <main className="container mx-auto px-6">
        <section id="home" aria-labelledby="hero-heading" className="min-h-screen flex items-center pt-32 md:pt-40">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h1
                id="hero-heading"
                className="text-4xl md:text-6xl font-bold leading-tight text-[color:var(--color-text)] animate-fade-in"
              >
                {HERO.heading}
              </h1>
              <h2 className="hero-kicker text-xl md:text-2xl mt-4" aria-live="polite">
                {typewriterText}
              </h2>
              <p className="mt-6 text-lg text-[color:var(--color-text-dim)] max-w-xl leading-relaxed">{HERO.paragraph1}</p>
              <p className="mt-4 text-[color:var(--color-text-dim)] max-w-xl leading-relaxed">{HERO.paragraph2}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href={HERO.primaryCta.href} className="btn-primary">
                  {HERO.primaryCta.label}
                </a>
                <a href={HERO.secondaryCta.href} className="btn-secondary">
                  {HERO.secondaryCta.label}
                </a>
              </div>
            </div>

            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <div className="hero-photo-frame" aria-label="Profile photo">
                <Image
                  src="/Foto_Formal.png"
                  alt="Wildan Andalaluna"
                  fill
                  priority
                  sizes="(max-width: 640px) 320px, (max-width: 768px) 360px, 380px"
                  className="hero-photo"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" aria-labelledby="about-heading" className="py-24 md:py-32">
          <h2 id="about-heading" className="section-title">
            About Me
          </h2>
          <p className="section-intro">{ABOUT.intro}</p>

          <div className="mt-10 max-w-4xl mx-auto space-y-6 text-center text-base md:text-lg text-[color:var(--color-text-dim)] leading-relaxed">
            {ABOUT.paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>

          <div className="mt-14 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start">
            <div id="certificates" className="order-1 md:order-1 scroll-mt-28 text-left">
              <h3 className="text-xl font-semibold tracking-tight text-[color:var(--color-text)]">Certificates</h3>
              <p className="mt-2 text-sm text-[color:var(--color-text-dim)]">Selected credentials and programs.</p>

              {CERTIFICATES.length ? (
                <ul className="mt-4 space-y-4" aria-label="Certificates">
                  {CERTIFICATES.map((certificate) => (
                    <CertificateCard key={certificate.id} certificate={certificate} />
                  ))}
                </ul>
              ) : (
                <p className="mt-4 text-sm text-[color:var(--color-text-dim)]">Certificates will be added soon.</p>
              )}
            </div>

            <div className="space-y-6 order-2 md:order-2 text-left">
              <h3 className="text-xl font-semibold tracking-tight text-[color:var(--color-text)]">Core Skills</h3>
              <ul className="mt-2 grid gap-4 sm:grid-cols-2" aria-label="Core skill categories">
                {SKILL_CATEGORIES.map((category) => (
                  <SkillCategoryCard key={category.title} category={category} />
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" aria-labelledby="projects-heading" className="py-24 md:py-32">
          <h2 id="projects-heading" className="section-title">
            Selected Projects
          </h2>
          <p className="section-intro">
            A curated set highlighting product thinking, data rigor, and user-centered execution. Reach out for full list.
          </p>

          <div className="projects-wrap relative mt-12">
            <button
              type="button"
              aria-label="Previous projects"
              className="projects-nav-btn hidden md:flex left"
              onClick={() => scrollProjects(-1)}
              disabled={!canScrollProjectsLeft}
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Next projects"
              className="projects-nav-btn hidden md:flex right"
              onClick={() => scrollProjects(1)}
              disabled={!canScrollProjectsRight}
            >
              ›
            </button>

            <div
              ref={projectsStripRef}
              className="projects-strip flex gap-8 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide"
              aria-label="Project list"
              tabIndex={0}
            >
              {PROJECTS.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" aria-labelledby="contact-heading" className="py-24 md:py-32">
          <h2 id="contact-heading" className="section-title">
            Get In Touch
          </h2>
          <p className="section-intro">
            Open to internships, freelance contributions, and collaborative problem solving. Prefer concise, value-driven communication.
          </p>
          <div className="max-w-xl mx-auto mt-12 bg-[color:var(--panel-bg)] backdrop-blur rounded-xl p-8 border border-[color:var(--panel-border)]">
            <ul className="space-y-4" aria-label="Contact channels">
              <li className="flex items-start gap-4">
                <span className="contact-label">Email</span>
                <a className="contact-link" href={`mailto:${SITE.email}`}>
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-4">
                <span className="contact-label">LinkedIn</span>
                <a className="contact-link" href={SITE.linkedInUrl} target="_blank" rel="noopener noreferrer">
                  /andalaluna27
                </a>
              </li>
              <li className="flex items-start gap-4">
                <span className="contact-label">GitHub</span>
                <a className="contact-link" href={SITE.githubUrl} target="_blank" rel="noopener noreferrer">
                  @WAndalaluna
                </a>
              </li>
            </ul>
          </div>
        </section>

        <button
          type="button"
          title="Back to Top"
          aria-label="Back to Top"
          onClick={() => window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" })}
          className={`fixed bottom-8 right-8 z-50 bg-cyan-500/90 hover:bg-cyan-600 text-white rounded-full p-4 shadow-lg shadow-cyan-600/30 transition-opacity focus:outline-none focus:ring focus:ring-cyan-400/50 ${
            showBackToTop ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </main>

      <Footer />
    </>
  );
}
