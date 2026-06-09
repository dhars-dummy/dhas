import "./style.css";
import { profile } from "./data/profile";
import {
  renderEducation,
  renderFooter,
  renderHero,
  renderHighlights,
  renderInternships,
  renderProjects,
} from "./components/sections";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="min-h-screen">
    <div class="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-16 md:py-24">
      ${renderHero(profile)}
      ${renderHighlights(profile)}
      ${renderEducation(profile)}
      ${renderInternships(profile)}
      ${renderProjects(profile)}
      ${renderFooter(profile)}
    </div>
  </div>
`;

// Scroll Reveal Animation
const initScrollReveal = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe cards and sections
  document.querySelectorAll(".portfolio-card, section > div").forEach((el) => {
    el.classList.add("scroll-reveal");
    observer.observe(el);
  });
};

// Parallax Mouse Effect
const initParallaxEffect = () => {
  const heroHeader = document.querySelector("header");
  if (!heroHeader) return;

  document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;

    const heroImage = heroHeader.querySelector("img");
    if (heroImage) {
      (heroImage.parentElement as HTMLElement).style.transform = `translate(${x * 0.5}px, ${y * 0.5}px)`;
    }
  });
};

// Smooth Scroll Progress Indicator
const initScrollProgress = () => {
  const progressBar = document.createElement("div");
  progressBar.className = "fixed top-0 left-0 h-1 bg-black transition-all duration-300 z-50";
  document.body.appendChild(progressBar);

  window.addEventListener("scroll", () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / scrollHeight) * 100;
    progressBar.style.width = `${scrolled}%`;
  });
};

// Initialize on load
window.addEventListener("load", () => {
  initScrollReveal();
  initParallaxEffect();
  initScrollProgress();
});

