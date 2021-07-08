import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import data from '../DATA.json';

const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', (event) => {
  drawer.classList.toggle('open');
  event.stopPropagation();
});

hero.addEventListener('click', () => {
  drawer.classList.remove('open');
});

main.addEventListener('click', () => {
  drawer.classList.remove('open');
});

function renderRestaurant() {
  let item = '';

  data.restaurants.forEach(({
    name, description, pictureId, city, rating,
  }) => {
    item += `<article class="restaurant-item">
        <img class="restaurant-item__thumbnail"
             src="${pictureId}"
             alt="${name}">
        <div class="restaurant-item__content">
            <h1 class="restaurant-item__title"><a href="#">${name}</a></h1>
            <p class="restaurant-item__description">${description.replace(/^(.{100}[^\s]*).*/, '$1')}</p>
            <div class="restaurant-item__info">
              🌟 ${rating}&nbsp;📍 ${city}
            </div>
        </div>
    </article>`;
  });

  document.getElementById('restaurantList').innerHTML = item;
}

renderRestaurant();
