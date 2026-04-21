// Landing page animations & interactions
document.addEventListener('DOMContentLoaded', () => {
  // Animate feature cards on scroll
  const cards = document.querySelectorAll('.feature-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = i * 0.1 + 's';
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  cards.forEach(c => observer.observe(c));

  // If user is already logged in, redirect to dashboard
  const user = localStorage.getItem('ll_user');
  if (user) {
    const loginBtn = document.querySelector('a[href="pages/login.html"]');
    const startBtn = document.querySelector('a[href="pages/signup.html"]');
    if (loginBtn) loginBtn.textContent = 'Dashboard';
    if (loginBtn) loginBtn.href = 'pages/dashboard.html';
    if (startBtn) startBtn.textContent = 'Continue Learning →';
    if (startBtn) startBtn.href = 'pages/dashboard.html';
  }
});
