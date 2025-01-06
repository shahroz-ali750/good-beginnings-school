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
    
    counters.forEach(counter => {
      counter.innerText = '0';
  
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
