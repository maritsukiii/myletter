const audioPlayer = document.getElementById('audioPlayer');
const lyrics = document.querySelectorAll('#lyricsContainer p');
let currentLineIndex = 0; // Индекс текущей строки

setInterval(() => {
  const currentTime = audioPlayer.currentTime;

  // Проверяем, если текущая строка еще не отображается и время прошло
  if (currentLineIndex < lyrics.length) {
    const lineTime = parseFloat(lyrics[currentLineIndex].getAttribute('data-time'));
    
    if (currentTime >= lineTime) {
      lyrics[currentLineIndex].classList.add('active'); // Показываем строку
      currentLineIndex++; // Переходим к следующей строке
    }
  }
}, 100); // Проверяем каждые 100 мс
    audioPlayer.addEventListener('timeupdate', updateLyrics);
  });

   // Получаем элемент уведомления
   const notification = document.getElementById('fullscreen-notification');

   // Добавляем обработчик события на нажатие
   notification.addEventListener('click', function() {
       // Проверяем, есть ли класс "hidden"
       if (!notification.classList.contains('hidden')) {
           // Добавляем класс, чтобы скрыть уведомление
           notification.classList.add('hidden');
       }
   });
