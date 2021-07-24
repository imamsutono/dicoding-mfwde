class FavoriteShowPresenter {
  constructor({ view, favorite }) {
    this._view = view;
    this._favorite = favorite;

    this._showFavorite();
  }

  async _showFavorite() {
    const restaurants = await this._favorite.getAllRestaurant();
    this._displayRestaurant(restaurants);
  }

  _displayRestaurant(restaurants) {
    this._view.showFavorite(restaurants);
  }
}

export default FavoriteShowPresenter;
