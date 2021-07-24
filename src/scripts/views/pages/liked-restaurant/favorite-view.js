import { createItemTemplate } from '../../templates/template-creator';

class FavoriteView {
  getTemplate() {
    return `
      <h1 class="list__label">Favorite Restaurant</h1>
      <div id="restaurantList" class="restaurant"></div>
    `;
  }

  showRestaurant(restaurant) {
    this.showFavorite(restaurant);
  }

  showFavorite(restaurants = []) {
    let html;

    if (restaurants.length) {
      html = restaurants.reduce((carry, restaurant) => carry.concat(createItemTemplate(restaurant)), '');
    } else {
      html = '<div class="restaurant-item__not__found restaurant__not__found">Tidak ada restoran untuk ditampilkan</div>';
    }

    document.querySelector('.hero').removeAttribute('style');

    document.getElementById('restaurantList').innerHTML = html;
    document.getElementById('restaurantList').dispatchEvent(new Event('restaurant:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return '<div class="restaurant-item__not__found restaurant__not__found">Tidak ada restoran untuk ditampilkan</div>';
  }
}

export default FavoriteView;
