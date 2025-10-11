// обработка формы запроса
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const data = new FormData(this);
  let result = '<h3>Вы ввели:</h3>';
  data.forEach((val, key) => {
    result += `<p><b>${key}:</b> ${val}</p>`;
  });
  document.getElementById('resultBox').innerHTML = result;
  document.getElementById('resultBox').style.display = 'block';
});

// обработка формы отзывов
document.getElementById('feedbackForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Спасибо за ваш отзыв! Мы его получили.");
  this.reset();
});