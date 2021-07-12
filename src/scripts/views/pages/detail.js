import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import { createDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div id="restaurant">
        <p class="align-center">Loading...</p>
      </div>
    `;
  },

  async afterRender() {
    document.querySelector('.hero').setAttribute('style', 'display: none;');

    const container = document.querySelector('#restaurant');
    container.innerHTML = '';

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const data = await RestaurantSource.detail(url.id);

    container.innerHTML = createDetailTemplate(data.restaurant);
  },
};

export default Detail;
