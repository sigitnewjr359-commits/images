// ================== NAVBAR SCROLL EFFECT ==================
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // Back to Top button
  const backToTop = document.getElementById("backToTop");
  if (backToTop) {
    backToTop.style.display = window.scrollY > 300 ? "block" : "none";
  }
});

// ================== BACK TO TOP BUTTON ==================
const backToTop = document.getElementById("backToTop");
if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ================== ANIMASI MUNCUL (GLOBAL) ==================
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(
    ".animate-fade, .animate-up, .section, .hero"
  );

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  animatedElements.forEach(el => {
    el.classList.add("hidden"); // class awal sebelum muncul
    observer.observe(el);
  });
});

// ================== ZOOM IMAGE MODAL (UNTUK MENU & FAVORIT) ==================
document.addEventListener("DOMContentLoaded", () => {
  // Buat modal
  const modal = document.createElement("div");
  modal.id = "imageModal";
  modal.style.cssText = `
    display: none;
    position: fixed;
    z-index: 9999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.8);
    justify-content: center;
    align-items: center;
    cursor: zoom-out;
  `;

  const modalImg = document.createElement("img");
  modalImg.style.cssText = `
    max-width: 90%;
    max-height: 90%;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.5);
  `;

  modal.appendChild(modalImg);
  document.body.appendChild(modal);

  const images = document.querySelectorAll(".favorit img, .menu-andalan img, .content-box img, .menu-card img");

  images.forEach(img => {
    img.style.cursor = "zoom-in";

    // Zoom modal
    img.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = img.src;
    });

    // Hover effect zoom kecil
    img.addEventListener("mouseover", () => {
      img.style.transform = "scale(1.05)";
      img.style.transition = "transform 0.3s ease";
    });
    img.addEventListener("mouseout", () => {
      img.style.transform = "scale(1)";
    });
  });

  // Tutup modal ketika diklik
  modal.addEventListener("click", () => {
    modal.style.display = "none";
  });
});

// ================== FAVORIT GLOW EFFECT ==================
const favoritCard = document.querySelector(".favorit-card img");
if (favoritCard) {
  setInterval(() => {
    favoritCard.classList.toggle("glow");
  }, 1500);
}

// ================== ANIMASI SCROLL (MENU & FAVORIT) ==================
const menuObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".menu-card, .favorit-card").forEach(el => {
  el.classList.add("hidden");
  menuObserver.observe(el);
});

// ================== SCROLL FADE-IN SECTION ==================
const sections = document.querySelectorAll(".section");
const sectionObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
      entry.target.style.transition = "opacity 1s ease, transform 1s ease";
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = "translateY(50px)";
  sectionObserver.observe(section);
});

// ================== SCROLL ANIMATION (fade left & right & card) ==================
const fadeObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".fade-left, .fade-right, .card").forEach(el => {
  fadeObserver.observe(el);
});

// ================== SMOOTH SCROLL ==================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// ================== CARD HOVER ANIMATION ==================
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.03)";
    card.style.transition = "transform 0.3s ease";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});

// ================== BANNER TEXT FADE-IN ==================
window.addEventListener("load", () => {
  const bannerText = document.querySelector(".banner-overlay");
  if (bannerText) {
    bannerText.style.opacity = 0;
    bannerText.style.transform = "translateY(30px)";
    bannerText.style.transition = "opacity 1.5s ease, transform 1.5s ease";

    setTimeout(() => {
      bannerText.style.opacity = 1;
      bannerText.style.transform = "translateY(0)";
    }, 300);
  }

  const overlayBox = document.querySelector(".overlay-box");
  if (overlayBox) {
    overlayBox.style.opacity = 0;
    overlayBox.style.transform = "translateY(40px)";
    overlayBox.style.transition = "opacity 1.5s ease, transform 1.5s ease";

    setTimeout(() => {
      overlayBox.style.opacity = 1;
      overlayBox.style.transform = "translateY(0)";
    }, 600);
  }
});

// ================== MAP BUTTON INTERACTION ==================
const mapBtn = document.querySelector(".map-btn");
if (mapBtn) {
  mapBtn.addEventListener("click", () => {
    mapBtn.classList.add("clicked");
    setTimeout(() => {
      mapBtn.classList.remove("clicked");
    }, 200);
  });
}

const mapFrame = document.querySelector(".map-frame");
if (mapFrame) {
  mapFrame.addEventListener("mouseover", () => {
    mapFrame.style.transform = "scale(1.02)";
    mapFrame.style.transition = "transform 0.4s ease";
  });
  mapFrame.addEventListener("mouseout", () => {
    mapFrame.style.transform = "scale(1)";
  });
}