// ========= Theme Toggle =========
const toggleTheme = () => {
  document.body.classList.toggle('dark-mode');

  // Optional: Save user preference to localStorage
  const mode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', mode);
};

// Load stored theme on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }
});

// ========= Form Submission (Optional UI feedback) =========
const contactForm = document.querySelector("form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Basic feedback
    alert("Thank you for contacting me! I'll get back to you soon.");

    // Optional: Clear form
    contactForm.reset();
  });
}

// ========= Optional: Add smooth fade-in on scroll =========
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  observer.observe(section);
});


  window.addEventListener("DOMContentLoaded", () => {
    const hash = window.location.hash;
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth" });
        }, 100); // slight delay to allow page rendering
      }
    }
  });

  function toggleDropdown(event) {
    event.preventDefault();
    const dropdown = event.target.closest('.dropdown');
    const menu = dropdown.querySelector('.dropdown-menu');

    document.querySelectorAll('.dropdown-menu').forEach(d => {
      if (d !== menu) d.classList.remove('show');
    });

    menu.classList.toggle('show');
  }

  // Close if clicked outside
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.dropdown')) {
      document.querySelectorAll('.dropdown-menu').forEach(d => d.classList.remove('show'));
    }
  });





