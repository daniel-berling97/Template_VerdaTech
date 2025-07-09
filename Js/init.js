
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");

  function handleScroll() {
    const middleY = window.scrollY + window.innerHeight / 1.5;

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      const bottom = top + section.offsetHeight;

      if (middleY >= top && middleY <= bottom) {
        section.classList.remove("blur-out");
        section.classList.add("blur-in");
      } else {
        section.classList.remove("blur-in");
        section.classList.add("blur-out");
      }
    });
  }

  // Roda ao carregar e ao rolar
  window.addEventListener("scroll", handleScroll);
  handleScroll();
});
