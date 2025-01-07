// nav toggle

document.addEventListener("DOMContentLoaded", () => {
  const toggleMenu = document.querySelector(".toggle-menu");
  const navigation = document.querySelector(".navigation");
  const dropdownToggles = document.querySelectorAll(".dropdown > a");
  const dropdowns = document.querySelectorAll(".dropdown");
  const navbar = document.querySelector(".navbar");

  // Toggle navigation menu for mobile
  toggleMenu.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent click from propagating to the document
    navigation.classList.toggle("active");
    toggleMenu.classList.toggle("close");
  });

  // Dropdown functionality
  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default link behavior
      const parentDropdown = toggle.closest(".dropdown");

      // Close other dropdowns
      dropdowns.forEach((dropdown) => {
        if (dropdown !== parentDropdown) {
          dropdown.classList.remove("active");
        }
      });

      // Toggle the clicked dropdown
      parentDropdown.classList.toggle("active");
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".dropdown")) {
      dropdowns.forEach((dropdown) => dropdown.classList.remove("active"));
    }
  });

  // Close navigation menu when clicking outside the navbar
  document.addEventListener("click", (e) => {
    if (!navbar.contains(e.target)) {
      navigation.classList.remove("active");
      toggleMenu.classList.remove("close");
    }
  });
});

// Accordion script

const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  const header = item.querySelector(".accordion-header");
  const content = item.querySelector(".accordion-content");
  const icon = header.querySelector("span");

  header.addEventListener("click", () => {
    const isOpen = content.classList.contains("open");

    // Close all other accordions
    accordionItems.forEach((i) => {
      i.querySelector(".accordion-content").classList.remove("open");
      i.querySelector(".accordion-header span").textContent = "+";
    });

    // Toggle the current one
    if (!isOpen) {
      content.classList.add("open");
      icon.textContent = "-";
    } else {
      content.classList.remove("open");
      icon.textContent = "+";
    }
  });
});
// Accordion script End //

// Counter Script //
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");

  counters.forEach((counter) => {
    counter.innerText = "0";

    const updateCounter = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;

      const increment = target / 200; // Adjust the speed of the counter

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCounter, 10);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
});

// Counter Script End
