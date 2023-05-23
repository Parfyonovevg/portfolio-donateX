const burger = document.querySelector('.burger-menu');
const navigation = document.querySelector('.navigation');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  navigation.classList.toggle('open');
});


console.log('hi')