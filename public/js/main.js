// ==========================
// ACCORDION (ONLY ONE OPEN)
// ==========================

document.querySelectorAll(".accordion-header").forEach(header => {
  header.addEventListener("click", () => {
    const item = header.parentElement;
    const body = item.querySelector(".accordion-body");

    const openItem = document.querySelector(".accordion-item.active");

    // CLOSE CURRENTLY OPEN ITEM (SMOOTH)
    if (openItem && openItem !== item) {
      const openBody = openItem.querySelector(".accordion-body");

      openBody.style.height = openBody.scrollHeight + "px";

      requestAnimationFrame(() => {
        openBody.style.height = "0";
        openBody.style.paddingTop = "0";
        openBody.style.paddingBottom = "0";
      });

      openItem.classList.remove("active");
    }

    // TOGGLE CLICKED ITEM
    if (item.classList.contains("active")) {
      // CLOSE
      body.style.height = body.scrollHeight + "px";

      requestAnimationFrame(() => {
        body.style.height = "0";
        body.style.paddingTop = "0";
        body.style.paddingBottom = "0";
      });

      item.classList.remove("active");
    } else {
      // OPEN
      item.classList.add("active");
      body.style.height = body.scrollHeight + "px";

      // 🔑 CRITICAL FIX: allow full content height after animation
      body.addEventListener(
        "transitionend",
        function handler(e) {
          if (e.propertyName === "height") {
            body.style.height = "auto";
            body.removeEventListener("transitionend", handler);
          }
        }
      );
    }
  });
});

// ==========================
// NAVBAR SCROLL EFFECT
// ==========================

const header = document.querySelector(".site-header");

if (header) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}


// ==========================
// FADE IN ON SCROLL
// ==========================

const fadeElements = document.querySelectorAll(".fade-in");

if (fadeElements.length > 0) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  fadeElements.forEach(el => observer.observe(el));
}