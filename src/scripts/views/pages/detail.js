import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import { createDetailTemplate } from '../templates/template-creator';
import FavoriteIdb from '../../data/favorite-idb';

const Detail = {
  async render() {
    return `
      <div id="restaurant">
        <p class="align-center">Loading...</p>
      </div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    document.querySelector('.hero').setAttribute('style', 'display: none;');

    const container = document.querySelector('#restaurant');
    container.innerHTML = '';

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const data = await RestaurantSource.detail(url.id);

    container.innerHTML = createDetailTemplate(data.restaurant);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favorite: FavoriteIdb,
      restaurant: data.restaurant,
    });
  },
};

export default Detail;
