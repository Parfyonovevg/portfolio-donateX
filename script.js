const burger = document.querySelector('.burger-menu');
const navigation = document.querySelector('.navigation');
const playButton = document.querySelector('.video__play-button');
const video = document.querySelector('iframe');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  navigation.classList.toggle('open');
});

playButton.addEventListener('click', () => {
  video.src = 'https://www.youtube.com/embed/xbqA6o8_WC0?autoplay=1';
  playButton.style.display = 'none';
  document.querySelector('.video__text').style.display = 'none';
});
