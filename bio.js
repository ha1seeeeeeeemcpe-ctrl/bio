// Плавное появление элементов при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.title, .photo, .info');
  items.forEach((el) => el.classList.add('reveal'));
  items.forEach((el, i) => setTimeout(() => el.classList.add('show'), 120 + i * 180));
});
