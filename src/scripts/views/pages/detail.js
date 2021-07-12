import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import { createDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div id="restaurant"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const data = await RestaurantSource.detail(url.id);
    const restaurantContainer = document.querySelector('#restaurant');

    document.querySelector('.hero').setAttribute('style', 'display: none;');
    restaurantContainer.innerHTML = createDetailTemplate(data.restaurant);
  },
};

export default Detail;
