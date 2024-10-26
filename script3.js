const audioPlayer = document.getElementById('audioPlayer');
const lyrics = document.querySelectorAll('#lyricsContainer p');

let lastLineIndex = -1; // Индекс последней активной строки

setInterval(() => {
  const currentTime = audioPlayer.currentTime;

  lyrics.forEach((line, index) => {
    const lineTime = parseFloat(line.getAttribute('data-time'));

    if (currentTime >= lineTime && lastLineIndex !== index) {
      line.classList.add('active');
      if (lastLineIndex !== -1) {
        lyrics[lastLineIndex].classList.remove('active'); // Удаляем класс у предыдущей строки
      }
      lastLineIndex = index; // Обновляем индекс
    }
  });
}, 100); // Проверяем каждую 100 мс
  
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
