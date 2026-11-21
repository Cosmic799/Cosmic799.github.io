// Renders the page from PROFILE (data.js) and starts the particle background.

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [key, value] of Object.entries(attrs)) {
    if (key === "text") node.textContent = value;
    else node.setAttribute(key, value);
  }
  for (const child of [].concat(children)) node.append(child);
  return node;
}

// A devicon name becomes a font icon; a path ending in .svg becomes an image
function techIcon(name) {
  if (name.endsWith(".svg")) {
    const label = name.split("/").pop().replace(".svg", "");
    return el("img", { class: "tech-img", src: name, alt: label, title: label });
  }
  return el("i", { class: `devicon-${name} colored`, title: name.split("-")[0] });
}

function renderHeader(p) {
  document.title = p.name;
  document.querySelector(".site-title").textContent = p.name.toUpperCase();
  // Each role is kept on one line so wrapping happens between roles
  const roles = document.querySelector(".site-description");
  p.roles.forEach((role, i) => {
    if (i) roles.append(" • ");
    roles.append(el("span", { class: "role", text: role }));
  });

  const icons = [
    ["LinkedIn profile", p.links.linkedin, "fa-linkedin"],
    ["GitHub profile", p.links.github, "fa-github-alt"],
    ["Résumé", p.resume, "fa-file-pdf-o"],
    ["Send email", "mailto:" + p.links.email, "fa-envelope"],
  ];
  const wrap = document.querySelector(".header-icons");
  for (const [label, href, icon] of icons) {
    if (!href || href === "mailto:") continue;
    wrap.append(
      el("a", { "aria-label": label, href, target: "_blank", rel: "noopener" }, [
        el("i", { class: `icon fa ${icon}`, "aria-hidden": "true" }),
      ])
    );
  }
}

function renderAbout(p) {
  const photo = document.querySelector(".profile-photo");
  photo.src = p.photo;
  photo.alt = p.name;

  const story = document.querySelector(".story");
  // Odd-indexed pieces of "a **b** c" are the bold parts
  for (const para of p.story) {
    story.append(el("p", {}, para.split("**").map((part, i) => (i % 2 ? el("strong", { text: part }) : part))));
  }

  const grid = document.querySelector(".user");
  for (const s of p.skills) {
    grid.append(
      el("div", { class: "tech" }, [
        el("h2", { text: s.title }),
        el("div", { class: "tech-icons" }, s.icons.map((t) =>
          el("div", { class: "skill-chip" }, [techIcon(t.icon), el("span", { text: t.name })])
        )),
        el("p", { text: s.text }),
      ])
    );
  }
}

function renderExperience(p) {
  const list = document.querySelector(".experience-list");
  for (const job of p.experience) {
    list.append(
      el("article", { class: "job" }, [
        el("div", { class: "job-head" }, [
          el("h3", { text: job.role }),
          el("span", { class: "job-period", text: job.period }),
        ]),
        el("div", { class: "job-company", text: `${job.company} · ${job.location}` }),
        el("ul", {}, job.points.map((pt) => el("li", { text: pt }))),
      ])
    );
  }
}

// Tall screenshots are cropped to a widescreen frame (top kept) so they line up with the others
function projectImage(proj) {
  const img = el("img", { src: proj.image, alt: proj.title, loading: "lazy" });
  img.addEventListener("load", () => {
    if (img.naturalHeight > img.naturalWidth * 0.75) img.classList.add("tall");
  });
  return img;
}

function renderProjects(p) {
  const list = document.querySelector(".project-list");
  p.projects.forEach((proj, idx) => {
    const flip = idx % 2 === 1;
    list.append(
      el("article", { class: "user-project" + (flip ? " flip" : "") }, [
        el("div", { class: "project-image" }, [projectImage(proj)]),
        el("div", { class: "project-body" }, [
          el("h3", { text: proj.title }),
          el("div", { class: "project-tech" }, proj.tech.map((t) =>
            el("span", { class: "tech-pill" }, [techIcon(t.icon), el("span", { text: t.name })])
          )),
          el("p", { text: proj.description }),
          proj.link ? el("a", { class: "project-link", href: proj.link, target: "_blank", rel: "noopener", text: "Check it out!" }) : "",
        ]),
      ])
    );
  });
}

// Dark / light switch; the starting theme is set by the inline script in <head>
function setupThemeToggle() {
  const root = document.documentElement;
  const button = document.querySelector(".theme-toggle");
  const icon = button.querySelector("i");

  const show = (theme) => {
    root.setAttribute("data-theme", theme);
    const dark = theme === "dark";
    icon.className = "fa " + (dark ? "fa-sun-o" : "fa-moon-o");
    button.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
  };

  show(root.getAttribute("data-theme") || "light");
  button.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    show(next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupThemeToggle();
  renderHeader(PROFILE);
  renderAbout(PROFILE);
  renderExperience(PROFILE);
  renderProjects(PROFILE);
  document.querySelector(".footer p").textContent = `© ${PROFILE.name}, ${new Date().getFullYear()}`;

  if (window.particlesJS) {
    particlesJS("particles-js", {
      particles: {
        number: { value: 40, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "polygon", polygon: { nb_sides: 5 } },
        opacity: { value: 0.5 },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 4, random: true, out_mode: "out" },
      },
      interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: false }, onclick: { enable: true, mode: "push" }, resize: true },
        modes: { push: { particles_nb: 4 } },
      },
      retina_detect: true,
    });
  }
});
