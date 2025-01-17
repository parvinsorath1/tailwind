const navDialog = document.getElementById('nav-dialog');

function handleMenu() {
    navDialog.classList.toggle("hidden")
}

// Ensure menu closes when clicking a link
const links = document.querySelectorAll('#nav-dialog a');
links.forEach(link => {
  link.addEventListener('click', () => {
    handleMenu(); // Close menu on link click
  });
});