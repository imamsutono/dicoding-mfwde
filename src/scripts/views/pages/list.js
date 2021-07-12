import RestaurantSource from '../../data/restaurant-source';
import { createItemTemplate } from '../templates/template-creator';

const List = {
  async render() {
    return `
      <h1 class="list__label">Explore Restaurant</h1>
      <div id="restaurantList" class="restaurant"></div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.list();
    const restaurantsContainer = document.querySelector('#restaurantList');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createItemTemplate(restaurant);
    });
    document.querySelector('.hero').removeAttribute('style');
  },
};

export default List;
