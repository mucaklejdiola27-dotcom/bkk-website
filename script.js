// ---------- Data ----------
const SERVICES = [
  { icon: "⌂", title: "New Build Brickwork", desc: "Precision-laid facades and structural walls for new residential developments." },
  { icon: "▤", title: "House Extensions",   desc: "Seamless extensions matched to existing brick tone, texture and bond." },
  { icon: "♣", title: "Garden Walls",       desc: "Bespoke garden walls, piers and features that elevate outdoor spaces." },
  { icon: "▦", title: "Retaining Walls",    desc: "Engineered retaining structures built for strength and longevity." },
  { icon: "⚒", title: "Blockwork",          desc: "Load-bearing and partition blockwork laid to exacting tolerances." },
  { icon: "✎", title: "Repointing",         desc: "Traditional and modern repointing to restore heritage character." },
  { icon: "◈", title: "Brick Repairs",      desc: "Discreet repairs, brick matching and full section rebuilds." },
  { icon: "▣", title: "Commercial Brickwork", desc: "Large-scale commercial masonry delivered on programme, on budget." },
  { icon: "⌂", title: "Residential Brickwork", desc: "Private homes and estates finished with the highest craftsmanship." },
];

const PROJECTS = [
  { img: "imgg8.jpg",  },
  { img: "imgg1.jpg",  },
  { img: "imgg4.jpg",  },
  { img: "imgg5.jpg",  },
  { img: "imgg2.jpg",  },
  { img: "imgg7.jpg",  },
  { img: "imgg6.jpg",  },
  { img: "img9.jpg",  },
  { img: "imgg3.jpg",  },
];

const REVIEWS = [
  { name: "Michael Ledden", stars: 5, text: "Benart and the team were absolutely superb. He is very responsive and professional and has done a superb job. I would highly recommend him." },
  { name: "Xhevahir Hoxha", stars: 5, text: "Very professional work, best prices on the market, friendly and educated staff, correct on the time line of the project. Happy to choose BBK Brickwork — highly recommended to everyone who wants high quality work." },
  { name: "Ermir Sula", stars: 5, text: "Really happy with the brickwork done during our house renovation. Great price, excellent quality, and everything finished much quicker than I expected. Friendly, hardworking and professional throughout." },
];

const REASONS = [
  { icon: "◆", title: "Experienced Team",         desc: "Time-served bricklayers with decades of combined experience." },
  { icon: "★", title: "High-Quality Workmanship", desc: "Every course laid to a benchmark of true craftsmanship." },
  { icon: "✓", title: "Reliable & Professional",  desc: "Clear communication, tidy sites, milestones you can trust." },
  { icon: "£", title: "Competitive Pricing",      desc: "Transparent quotes with no surprises — premium value, always." },
  { icon: "❖", title: "Fully Insured",            desc: "Compliant and safe on every job." },
  { icon: "♥", title: "Customer Satisfaction",    desc: "Repeat clients and referrals — our reputation is built brick by brick." },
];

// ---------- Render ----------
document.getElementById("servicesGrid").innerHTML = SERVICES.map(s => `
  <div class="service-card">
    <div class="ico" aria-hidden="true">${s.icon}</div>
    <h3>${s.title}</h3><p>${s.desc}</p>
  </div>`).join("");

document.getElementById("galleryGrid").innerHTML = PROJECTS.map(p => `
  <figure><img src="${p.img}" loading="lazy" alt="${p.alt}"></figure>
`).join("");

document.getElementById("reviewsGrid").innerHTML = REVIEWS.map(r => `
  <article class="review">
    <div class="stars">${"\u2605 ".repeat(Math.max(1, Math.min(5, r.stars || 5))).trim()}</div>
    <blockquote>“${r.text || ""}”</blockquote>
    <footer><strong>${r.name || ""}</strong></footer>
  </article>`).join("");

document.getElementById("whyGrid").innerHTML = REASONS.map(r => `
  <div class="why-card">
    <div class="why-badge"><span>${r.icon}</span></div>
    <h3>${r.title}</h3><p>${r.desc}</p>
  </div>`).join("");

document.getElementById("year").textContent = new Date().getFullYear();

// ---------- Header scroll ----------
const header = document.getElementById("siteHeader");
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 20);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// ---------- Mobile nav ----------
const navToggle = document.getElementById("navToggle");
const navLinks  = document.getElementById("navLinks");
navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));

// ---------- Reveal on scroll ----------
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal, .section-head, .service-card, .why-card, .review, .gallery figure").forEach(el => {
  el.classList.add("reveal"); io.observe(el);
});