document.addEventListener('DOMContentLoaded', function () {
  // Mobile Menu Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
  });

  // Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();

          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);

          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop,
                  behavior: 'smooth'
              });

              // Close the mobile menu if it's open
              if (window.innerWidth <= 768) { // Adjust breakpoint as needed
                  navLinks.classList.remove('active');
              }
          }
      });
  });

  // Active Link Highlighting (Optional)
  const currentPage = window.location.pathname.split('/').pop(); // Get current filename
  const navLinksArray = Array.from(navLinks.querySelectorAll('a')); // Convert to array

  navLinksArray.forEach(link => {
      const linkHref = link.getAttribute('href');
      const linkPage = linkHref.split('/').pop();

      if (linkPage === currentPage) {
          link.classList.add('active');
      }
  });


  // Form Submission (Contact Page)
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) { // Check if the form exists on the page
      contactForm.addEventListener('submit', function (event) {
          event.preventDefault(); // Prevent default form submission

          // Here you would typically handle form submission, e.g., using AJAX
          // For this example, we'll just show an alert
          alert("Thank you for your message! We will get back to you soon.");

          // Reset the form (optional)
          contactForm.reset();
      });
  }

});

document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for reaching out! We will get back to you soon.');
  this.reset();
});
