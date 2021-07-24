import FavoriteIdb from '../../data/favorite-idb';
import FavoriteShowPresenter from './liked-restaurant/favorite-show-presenter';
import FavoriteView from './liked-restaurant/favorite-view';

const view = new FavoriteView();

const Favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteShowPresenter({ view, favorite: FavoriteIdb });
  },
};

export default Favorite;
