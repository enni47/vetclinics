document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM fully loaded and parsed');

  // Навігація: ефекти при наведенні
  document.querySelectorAll('.navigation a').forEach(link => {
    link.addEventListener('mouseover', function () {
      this.style.color = '#f8b489';
    });
    link.addEventListener('mouseout', function () {
      this.style.color = '#b67b73';
    });
  });

  // Обробка форми
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      let name = document.getElementById('name').value;
      let email = document.getElementById('email').value;
      let message = document.getElementById('message').value;

      console.log('Форма відправлена:');
      console.log('Ім\'я:', name);
      console.log('Email:', email);
      console.log('Повідомлення:', message);

      alert('Дякуємо за ваше повідомлення!');
      this.reset();
    });
  }

  // Слайдер
  let currentSlide = 0;
  const slides = document.querySelectorAll('#imageSlider img');
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');

  function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
slides[n].classList.add('active');

  }

  if (nextBtn && prevBtn && slides.length > 0) {
    nextBtn.addEventListener('click', function () {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    });

    prevBtn.addEventListener('click', function () {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    });

    showSlide(currentSlide);
  }
});
