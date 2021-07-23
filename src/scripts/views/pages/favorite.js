import FavoriteIdb from '../../data/favorite-idb';
import { createItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <h1 class="list__label">Favorite Restaurant</h1>
      <div id="restaurantList" class="restaurant"></div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteIdb.getAllRestaurant();
    const container = document.querySelector('#restaurantList');

    restaurants.forEach((restaurant) => {
      container.innerHTML += createItemTemplate(restaurant);
    });
    document.querySelector('.hero').removeAttribute('style');
  },
};

export default Favorite;
