import type { Profile } from "../data/profile";

const renderPill = (item: string, index: number) =>
  `<span class="fade-in inline-flex items-center gap-2 border border-gray-400 bg-white px-3 py-2 text-xs font-semibold uppercase tracking-widest transition-all hover:border-black hover:bg-black hover:text-white" style="animation-delay: ${index * 50}ms">
    <span class="h-1 w-1 rounded-full bg-current"></span>${item}
  </span>`;

const renderListItem = (item: string) =>
  `<li class="flex items-start gap-3 text-sm leading-relaxed text-gray-700 transition-transform hover:translate-x-1">
    <span class="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-black"></span>
    <span>${item}</span>
  </li>`;

export const renderHero = (profile: Profile, imageUrl?: string) => {
  const heroImage = imageUrl || "/dhachi.jpg";
  return `
  <header class="slide-in-left mb-20">
    <div class="grid grid-cols-1 gap-12 md:grid-cols-[1fr_1.1fr] md:items-center">
      <!-- Left Content -->
      <div class="space-y-6">
        <div class="space-y-2">
          <p class="portfolio-label text-gray-400">Welcome</p>
          <h1 class="text-5xl font-black leading-tight md:text-7xl">${profile.name}</h1>
          <p class="portfolio-label mt-3">${profile.title}</p>
        </div>
        <div class="portfolio-divider"></div>
        <p class="text-base leading-relaxed text-gray-700 md:text-lg">${profile.summary}</p>
        <div class="flex flex-wrap gap-2 pt-2">
          <a class="group border border-black bg-black px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-black" href="mailto:${profile.contact.email}">Email Me</a>
          <a class="border border-black px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-all hover:bg-black hover:text-white" href="tel:${profile.contact.phone}">Call</a>
          <a class="border border-black px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-all hover:bg-black hover:text-white" href="https://${profile.contact.website}" target="_blank" rel="noreferrer">Portfolio</a>
        </div>
      </div>
      
      <!-- Right Image -->
      <div class="scale-up flex justify-center md:justify-end">
        <div class="relative">
          <div class="absolute -inset-4 border-2 border-gray-200"></div>
          <div class="absolute -inset-6 border-2 border-black opacity-20"></div>
          <img
            src="${heroImage}"
            alt="${profile.name}"
            class="relative h-64 w-64 bg-gray-100 object-cover grayscale transition-all duration-500 hover:grayscale-0"
          />
          <div class="absolute -bottom-3 -right-3 bg-black px-4 py-2 text-xs font-bold uppercase tracking-widest text-white">B.Pharm</div>
        </div>
      </div>
    </div>
  </header>
  `;
};

export const renderHighlights = (profile: Profile) => `
  <section class="fade-in mb-20 grid grid-cols-1 gap-6 md:grid-cols-3">
    <!-- Location Card -->
    <div class="portfolio-card scroll-reveal group relative overflow-hidden">
      <div class="absolute top-0 left-0 h-1 w-0 bg-black transition-all group-hover:w-full"></div>
      <p class="portfolio-label">Location</p>
      <p class="mt-4 text-xl font-bold text-black">${profile.location}</p>
    </div>

    <!-- Languages Card -->
    <div class="portfolio-card scroll-reveal group relative overflow-hidden">
      <div class="absolute top-0 left-0 h-1 w-0 bg-black transition-all group-hover:w-full"></div>
      <p class="portfolio-label">Languages</p>
      <ul class="mt-4 space-y-2">${profile.languages.map(renderListItem).join("")}</ul>
    </div>

    <!-- Skills Card -->
    <div class="portfolio-card scroll-reveal group relative overflow-hidden">
      <div class="absolute top-0 left-0 h-1 w-0 bg-black transition-all group-hover:w-full"></div>
      <p class="portfolio-label">Expertise</p>
      <div class="mt-4 flex flex-wrap gap-2">${profile.skills.map((skill, idx) => renderPill(skill, idx)).join("")}</div>
    </div>
  </section>
`;

export const renderEducation = (profile: Profile) => `
  <section id="education" class="fade-in mb-20">
    <div class="mb-8 flex items-center justify-between">
      <h2 class="text-4xl font-black uppercase tracking-tight">Education</h2>
      <span class="portfolio-label hidden md:block">Chapter 01</span>
    </div>
    <div class="space-y-4">
      ${profile.education
        .map(
          (item, idx) => `
        <article class="portfolio-card scroll-reveal group relative overflow-hidden" style="animation-delay: ${idx * 100}ms">
          <div class="absolute top-0 left-0 h-full w-1 bg-black opacity-0 transition-opacity group-hover:opacity-100"></div>
          <div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div class="flex-1">
              <h3 class="text-lg font-bold text-black">${item.degree}</h3>
              <p class="portfolio-label mt-2">${item.institute}</p>
            </div>
            <div class="flex flex-col gap-1 text-right">
              <span class="font-bold text-black">${item.score}</span>
              <span class="text-xs text-gray-500">${item.period}</span>
            </div>
          </div>
          <p class="mt-3 text-sm leading-relaxed text-gray-700">${item.description}</p>
        </article>
      `,
        )
        .join("")}
    </div>
  </section>
`;

export const renderInternships = (profile: Profile) => `
  <section id="internships" class="fade-in mb-20">
    <div class="mb-8 flex items-center justify-between">
      <h2 class="text-4xl font-black uppercase tracking-tight">Experience</h2>
      <span class="portfolio-label hidden md:block">Chapter 02</span>
    </div>
    <div class="space-y-4">
      ${profile.internships
        .map(
          (item, idx) => `
        <article class="portfolio-card scroll-reveal group relative overflow-hidden" style="animation-delay: ${idx * 100}ms">
          <div class="absolute top-0 left-0 h-full w-1 bg-black opacity-0 transition-opacity group-hover:opacity-100"></div>
          <div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div class="flex-1">
              <h3 class="text-lg font-bold text-black">${item.role}</h3>
              <p class="portfolio-label mt-2">${item.company}</p>
            </div>
            <span class="text-xs font-bold uppercase tracking-widest text-gray-500">${item.period}</span>
          </div>
          <p class="mt-3 text-sm leading-relaxed text-gray-700">${item.description}</p>
        </article>
      `,
        )
        .join("")}
    </div>
  </section>
`;

export const renderProjects = (profile: Profile) => `
  <section id="projects" class="fade-in mb-20">
    <div class="mb-8 flex items-center justify-between">
      <h2 class="text-4xl font-black uppercase tracking-tight">Projects</h2>
      <span class="portfolio-label hidden md:block">Chapter 03</span>
    </div>
    <div class="space-y-4">
      ${profile.projects
        .map(
          (item, idx) => `
        <article class="portfolio-card scroll-reveal group relative overflow-hidden bg-gradient-to-br from-white to-gray-50" style="animation-delay: ${idx * 100}ms">
          <div class="absolute top-0 left-0 h-full w-1 bg-black opacity-0 transition-opacity group-hover:opacity-100"></div>
          <div class="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
            <div class="flex-1">
              <h3 class="text-lg font-bold text-black">${item.title}</h3>
              <span class="inline-block portfolio-label mt-2">${item.type}</span>
            </div>
          </div>
          <div class="portfolio-divider my-3 opacity-20"></div>
          <p class="text-sm leading-relaxed text-gray-700">${item.description}</p>
        </article>
      `,
        )
        .join("")}
    </div>
  </section>
`;

export const renderFooter = (profile: Profile) => `
  <footer class="fade-in border-t-2 border-black pt-12">
    <div class="mb-6 grid grid-cols-1 gap-6 md:grid-cols-3">
      <div>
        <p class="portfolio-label mb-2">Contact</p>
        <a href="mailto:${profile.contact.email}" class="text-sm font-semibold text-black transition hover:opacity-60">${profile.contact.email}</a>
      </div>
      <div>
        <p class="portfolio-label mb-2">Location</p>
        <p class="text-sm font-semibold text-black">${profile.location}</p>
      </div>
      <div>
        <p class="portfolio-label mb-2">Phone</p>
        <a href="tel:${profile.contact.phone}" class="text-sm font-semibold text-black transition hover:opacity-60">${profile.contact.phone}</a>
      </div>
    </div>
    <div class="portfolio-divider my-6"></div>
    <div class="flex flex-col items-center justify-between gap-4 md:flex-row">
      <p class="text-xs uppercase tracking-[0.3em] text-gray-500">&copy; 2026 ${profile.name}</p>
      <p class="text-xs uppercase tracking-[0.3em] text-gray-500">Designed & Built with <span class="text-red-600">♥</span></p>
    </div>
  </footer>
`;
