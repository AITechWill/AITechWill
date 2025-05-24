<script>
  const toggle = document.getElementById('darkToggle');
  const icon = toggle.querySelector('i');
  const menu = document.getElementById('mobile-menu');
  const navLinks = document.getElementById('nav-links');

  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
  });

  menu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
</script>
