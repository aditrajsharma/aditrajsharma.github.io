const projects = [
  {
    title: "RYNEX",
    discipline: "Threat Intelligence / Graph Analysis / AI",
    year: "2026",
    image: "chrome.jpg",
    tag: "PROJECT / 2026",
    description: "Connecting clues that don't look connected at first.",
  },
  {
    title: "CLARIX",
    discipline: "Deep Learning / Computer Vision / Geospatial",
    year: "2026",
    image: "off-grid.svg",
    tag: "PROJECT / 2026",
    description:
      "Making medium-resolution satellite imagery more useful at a finer scale.",
  },
  {
    title: "EAZZIO PAYROLL",
    discipline: "Full Stack / Web & Mobile",
    year: "2026",
    image: "blue.jpg",
    tag: "PROJECT / 2026",
    description: "Smart Field Management for Stronger Teams.",
  },
  {
    title: "BIDSHIELD",
    discipline: "Graph Intelligence / AI / Procurement",
    year: "2026",
    image: "form.svg",
    tag: "PROJECT / 2026",
    description: "Finding relationships hidden inside bidding data.",
  },
  {
    title: "DSA",
    discipline: "C++ / Algorithms / Problem Solving",
    year: "",
    image: "ochre.jpg",
    tag: "PRACTICE & EXPLORATION",
    description:
      "Ongoing algorithm study, data structure fundamentals, and competitive problem solving in C++.",
  },
  {
    title: "AI / ML",
    discipline: "Computer Vision / Applied Machine Learning",
    year: "",
    image: "type.svg",
    tag: "PRACTICE & EXPLORATION",
    description:
      "Practical machine learning workflows, neural network architectures, and computer vision models.",
  },
  {
    title: "BACKEND / SYSTEMS",
    discipline: "APIs / Databases / Architecture",
    year: "",
    image: "orbit.svg",
    tag: "PRACTICE & EXPLORATION",
    description:
      "Exploring distributed systems, low-latency APIs, database internals, and scalable backend design.",
  },
  {
    title: "UPCOMING",
    discipline: "Rust / System Design / New Builds",
    year: "",
    image: "kinetic.svg",
    tag: "FUTURE BUILDS",
    description:
      "Future prototypes, systems programming with Rust, and planned software experiments.",
  },
];
const heroTiles = projects;
const asset = (p) => "/assets/" + p;
const grid = document.getElementById("image-grid");
heroTiles.forEach((p, i) => {
  const card = document.createElement("figure");
  card.className = "art-card";
  const img = document.createElement("img");
  img.src = asset(p.image);
  img.alt = p.title || "";
  img.draggable = false;
  card.append(img);
  grid.append(card);
});
const work = location.pathname.replace(/\/$/, "") === "/work";
document.getElementById("home-view").hidden = work;
document.getElementById("work-view").hidden = !work;
if (work) {
  document
    .querySelector("[data-nav=work]")
    .setAttribute("aria-current", "page");
  document.title = "Selected Work — Your Name";
}
const reduced = matchMedia("(prefers-reduced-motion: reduce)");
document.addEventListener(
  "pointermove",
  (e) => {
    if (work || reduced.matches || e.pointerType === "touch") return;
    grid.style.setProperty("--mx", `${-(e.clientX / innerWidth - 0.5) * 80}px`);
    grid.style.setProperty(
      "--my",
      `${-(e.clientY / innerHeight - 0.5) * 80}px`,
    );
  },
  { passive: true },
);
document.addEventListener("pointerleave", () => {
  grid.style.setProperty("--mx", "0px");
  grid.style.setProperty("--my", "0px");
});
const themeToggle = document.getElementById("themeToggle");
function syncTheme() {
  const dark = document.documentElement.dataset.theme === "dark";
  themeToggle.setAttribute(
    "aria-label",
    dark ? "Switch to light mode" : "Switch to dark mode",
  );
  themeToggle.title = themeToggle.getAttribute("aria-label");
}
syncTheme();
themeToggle.addEventListener("click", () => {
  document.documentElement.dataset.theme =
    document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  try {
    localStorage.setItem(
      "portfolio-theme",
      document.documentElement.dataset.theme,
    );
  } catch (e) {}
  syncTheme();
});
matchMedia("(prefers-color-scheme:dark)").addEventListener("change", (e) => {
  let saved;
  try {
    saved = localStorage.getItem("portfolio-theme");
  } catch (e) {}
  if (!saved) {
    document.documentElement.dataset.theme = e.matches ? "dark" : "light";
    syncTheme();
  }
});
const dialog = document.getElementById("detail");
function openDialog(tag, title, html) {
  document.getElementById("dialog-tag").textContent = tag;
  document.getElementById("dialog-title").textContent = title;
  document.getElementById("dialog-body").innerHTML = html;
  dialog.showModal();
}
const EMAIL = ""; // Add your real contact email here before publishing.
const dialogs = {
  about: () =>
    openDialog(
      "THE PERSON BEHIND THE PRACTICE",
      "A different way of seeing.",
      '<p>I’m Your Name, an independent visual designer and artist working across identities, editorial design, and digital experiences. I’m drawn to unexpected combinations, clear ideas, and work with a point of view.</p><p>My practice connects strategic thinking with hands-on experimentation — moving between typography, image-making, and interactive design.</p><p class="micro">SAMPLE BIO — REPLACE WITH YOUR OWN STORY.</p><button class="accent-button" id="contact-from-about">Let’s make something ↗</button>',
    ),
  contact: () => {
    openDialog(
      "OPEN FOR COLLABORATIONS",
      "Good work starts with a conversation.",
      EMAIL
        ? '<p>Tell me what you have in mind.</p><a class="contact-address" href="mailto:' +
            EMAIL +
            '">' +
            EMAIL +
            ' ↗</a><button class="accent-button" id="copy-email">Copy email</button><span id="copy-status" role="status"></span>'
        : '<p>Have a project, a collaboration, or an interesting idea? This space is ready for your contact details.</p><p class="contact-address">Your email goes here ↗</p><p class="micro">SET EMAIL IN ASSETS/PORTFOLIO.JS BEFORE PUBLISHING.</p>',
    );
    if (EMAIL)
      document.getElementById("copy-email").onclick = async () => {
        try {
          await navigator.clipboard.writeText(EMAIL);
          document.getElementById("copy-status").textContent = "Copied!";
        } catch (e) {
          document.getElementById("copy-status").textContent =
            "Select the address above to copy.";
        }
      };
  },
};
document.querySelectorAll("[data-dialog]").forEach(
  (b) =>
    (b.onclick = () => {
      dialogs[b.dataset.dialog]();
      const next = document.getElementById("contact-from-about");
      if (next) next.onclick = () => dialogs.contact();
    }),
);
dialog.querySelector(".close").onclick = () => dialog.close();
dialog.addEventListener("click", (e) => {
  if (e.target !== dialog) return;
  const r = dialog.getBoundingClientRect();
  if (
    e.clientX < r.left ||
    e.clientX > r.right ||
    e.clientY < r.top ||
    e.clientY > r.bottom
  )
    dialog.close();
});
const list = document.getElementById("project-list"),
  preview = document.getElementById("floating-preview");
function showPreview(p, i) {
  if (preview.getAttribute("src") === asset(p.image)) return;
  preview.src = asset(p.image);
  preview.alt = p.title + " preview";
  preview.style.animation = "none";
  void preview.offsetWidth;
  preview.style.animation = "";
  document.getElementById("preview-label").textContent =
    String(i + 1).padStart(2, "0") + " / " + p.title.toUpperCase();
}
projects.forEach((p, i) => {
  const row = document.createElement("button");
  row.className = "project-row";
  const meta = p.year ? `${p.discipline} · ${p.year}` : p.discipline;
  row.innerHTML = `<span class="row-number">${String(i + 1).padStart(2, "0")}</span><span><span class="project-name">${p.title}</span><span class="project-discipline">${meta}</span></span><span class="row-arrow">↗</span>`;
  row.onpointerenter = () => showPreview(p, i);
  row.onfocus = () => showPreview(p, i);
  row.onclick = () =>
    openDialog(
      p.tag || "ENTRY / 0" + (i + 1),
      p.title,
      `<p>${p.description}</p><p class="micro">${p.discipline.toUpperCase()}</p><img class="dialog-art" src="${asset(p.image)}" alt="${p.title} preview">`,
    );
  list.append(row);
});
