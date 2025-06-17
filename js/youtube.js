// Flávia Glenda Guimarães Carvalho 
document.querySelector('.menu-btn').addEventListener('click', () => {
  document.querySelector('.sidebar').classList.toggle('show');
});

const menuBtn = document.querySelector('.menu-btn');
const sidebar = document.querySelector('.sidebar');
const content = document.querySelector('.content');

menuBtn.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');
  content.classList.toggle('expanded');
});

