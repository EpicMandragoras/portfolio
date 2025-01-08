// script.js



document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const sidebar = document.getElementById("sidebar");
    const navLinks = document.querySelectorAll(".nav-link");

    // Toggle the sidebar when the hamburger is clicked
    hamburger.addEventListener("click", () => {
        sidebar.classList.toggle("active");
    });

    // Close the sidebar when a navigation link is clicked
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            // Close the sidebar
            sidebar.classList.remove("active");
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
  const button = document.querySelector('button');
  const target = document.getElementById('about-me'); // Target section

  button.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent default anchor behavior

      // Determine the active header height
      let headerHeight = 0;

      // Check for the visible header
      const desktopHeader = document.querySelector('.top-nav');
      const mobileHeader = document.querySelector('.top-header');

      if (window.getComputedStyle(desktopHeader).display !== 'none') {
          headerHeight = desktopHeader.offsetHeight;
      } else if (window.getComputedStyle(mobileHeader).display !== 'none') {
          headerHeight = mobileHeader.offsetHeight;
      }

      // Get the vertical position of the target and adjust for the header height
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
          top: targetPosition - headerHeight,
          behavior: 'smooth',
      });
  });
});
