const audioPlayer = document.getElementById('audioPlayer');
const lyrics = document.querySelectorAll('#lyricsContainer p');

audioPlayer.addEventListener('timeupdate', () => {
  const currentTime = audioPlayer.currentTime;

  lyrics.forEach((line) => {
    const lineTime = parseFloat(line.getAttribute('data-time'));

    if (currentTime >= lineTime) {
      line.classList.add('active');
    } else {
      line.classList.remove('active');
    }
  });

  // Остановка плеера, когда песня заканчивается
  if (currentTime >= audioPlayer.duration) {
    audioPlayer.pause(); // Останавливает плеер
  }
});
  
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
