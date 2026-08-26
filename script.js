const translations = {
  "nav.home": { en: "Home", de: "Start" },
  "nav.about": { en: "About", de: "Über mich" },
  "nav.experience": { en: "Experience", de: "Erfahrung" },
  "nav.education": { en: "Education", de: "Ausbildung" },
  "nav.contact": { en: "Contact", de: "Kontakt" },

  "hero.kicker": {
    en: "Mechatronics · Field Service · Industrial Systems",
    de: "Mechatronik · Servicetechnik · Industrieanlagen"
  },
  "hero.text": {
    en: "I am a mechatronics engineer and field service technician with several years of experience in technical service, assembly and industrial environments. I currently work internationally in service for industrial furnace systems.",
    de: "Ich bin Mechatroniker und Servicetechniker mit mehrjähriger Erfahrung in technischem Service, Montage und industriellen Arbeitsumgebungen. Aktuell bin ich international im Service für Industrieofenanlagen tätig."
  },
  "hero.experience": { en: "View Experience", de: "Erfahrung ansehen" },
  "hero.cv": { en: "Download CV", de: "Lebenslauf herunterladen" },

  "about.label": { en: "ABOUT", de: "ÜBER MICH" },
  "about.lead": {
    en: "I work in international field service, where I install, maintain and troubleshoot industrial equipment.",
    de: "Ich arbeite im internationalen Service, wo ich Industrieanlagen installiere, betreue und Störungen behebe."
  },
  "about.text": {
    en: "My work combines mechanical, electrical and mechatronic tasks and often requires practical solutions directly on site. During international assignments, I also coordinate teams and organize work on site.",
    de: "Meine Arbeit verbindet mechanische, elektrotechnische und mechatronische Aufgaben und erfordert oft praktische Lösungen direkt vor Ort. Bei internationalen Einsätzen koordiniere ich außerdem Teams und organisiere die Arbeiten auf der Baustelle."
  },

  "toolbox.title": { en: "TECHNICAL TOOLBOX", de: "TECHNISCHE TOOLBOX" },
  "toolbox.1": { en: "Electrical Wiring", de: "Elektrotechnische Verkabelung" },
  "toolbox.2": { en: "Electrical Schematics", de: "Schaltpläne" },
  "toolbox.3": { en: "TIG / WIG Welding", de: "WIG-Schweißen" },
  "toolbox.4": { en: "Metalworking", de: "Metallbearbeitung" },
  "toolbox.5": { en: "Mechanical Assembly", de: "Mechanische Montage" },
  "toolbox.6": { en: "Troubleshooting", de: "Störungsbehebung" },
  "toolbox.7": { en: "PLC", de: "SPS" },
  "toolbox.8": { en: "Industrial Furnace Systems", de: "Industrieofenanlagen" },

  "field.title": { en: "FIELD EXPERIENCE", de: "PRAXISERFAHRUNG" },
  "field.1": { en: "International Service", de: "Internationaler Service" },
  "field.2": { en: "Team Coordination", de: "Teamkoordination" },
  "field.3": { en: "Installation & Assembly", de: "Installation & Montage" },
  "field.4": { en: "On-Site Troubleshooting", de: "Störungsbehebung vor Ort" },
  "field.5": { en: "Service & Maintenance", de: "Service & Instandhaltung" },
  "field.6": { en: "Time Management", de: "Zeitmanagement" },

  "experience.label": { en: "PROFESSIONAL EXPERIENCE", de: "BERUFSERFAHRUNG" },

  "experience.1.date": { en: "NOV 2023 — PRESENT", de: "NOV 2023 — HEUTE" },
  "experience.1.type": { en: "FIELD SERVICE", de: "SERVICETECHNIK" },
  "experience.1.title": { en: "Service Technician", de: "Servicetechniker" },
  "experience.1.desc": {
    en: "EBNER Industrieofenbau GmbH · International service assignments in the DACH region, France, Italy, Poland, Romania, South Korea, Saudi Arabia and South Africa for industrial furnace systems, including installation work, troubleshooting and team coordination on site.",
    de: "EBNER Industrieofenbau GmbH · Internationale Serviceeinsätze in der DACH-Region sowie in Frankreich, Italien, Polen, Rumänien, Südkorea, Saudi-Arabien und Südafrika für Industrieofenanlagen, inklusive Montagearbeiten, Störungsbehebung und Teamkoordination vor Ort."
  },

  "experience.2.date": { en: "SEP 2019 — OCT 2023", de: "SEP 2019 — OKT 2023" },
  "experience.2.type": { en: "SERVICE & ASSEMBLY", de: "SERVICE & MONTAGE" },
  "experience.2.title": { en: "Installer / Service Technician", de: "Monteur / Servicetechniker" },
  "experience.2.desc": {
    en: "SMGE GmbH · Service and assembly work in commercial kitchen and stainless steel construction projects in Austria.",
    de: "SMGE GmbH · Service- und Montagearbeiten im Bereich Großküchen und Edelstahlbau in Österreich."
  },

  "education.label": { en: "EDUCATION", de: "AUSBILDUNG" },
  "education.date": { en: "2014 — 2019", de: "2014 — 2019" },
  "education.meta": { en: "TECHNICAL EDUCATION", de: "TECHNISCHE AUSBILDUNG" },
  "education.title": { en: "Higher Technical College for Mechatronics", de: "HTL für Mechatronik" },
  "education.text": {
    en: "HTL Karlstein · Mechatronics with diploma thesis in cooperation with AGRANA Stärke GmbH.",
    de: "HTL Karlstein · Mechatronik mit Diplomarbeit in Zusammenarbeit mit AGRANA Stärke GmbH."
  },

  "contact.label": { en: "CONTACT", de: "KONTAKT" },
  "contact.text": {
    en: "For professional inquiries, feel free to get in touch.",
    de: "Für berufliche Anfragen freue ich mich über eine Kontaktaufnahme."
  },
  "contact.location": { en: "LOCATION", de: "ORT" },
  "contact.location.value": { en: "Weitra, Austria", de: "Weitra, Österreich" }
};

const langButtons = document.querySelectorAll(".lang-btn");
const translatableNodes = document.querySelectorAll("[data-i18n]");
const navLinks = document.querySelectorAll(".nav a");
const sections = document.querySelectorAll("main section[id]");
const yearNode = document.getElementById("year");

function setLanguage(lang) {
  translatableNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (translations[key]?.[lang]) {
      node.textContent = translations[key][lang];
    }
  });

  document.documentElement.lang = lang;

  langButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });

  localStorage.setItem("patrickPortfolioLang", lang);
}

function updateActiveNav() {
  let current = "home";

  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 150) {
      current = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

window.addEventListener("scroll", updateActiveNav);

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

setLanguage(localStorage.getItem("patrickPortfolioLang") || "en");
updateActiveNav();
