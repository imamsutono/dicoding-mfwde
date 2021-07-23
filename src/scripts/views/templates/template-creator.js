import CONFIG from '../../globals/config';

const createItemTemplate = ({
  id, pictureId, name, description, rating, city,
}) => `
  <article class="restaurant-item">
    <img class="restaurant-item__thumbnail"
        src="${CONFIG.BASE_IMAGE_URL}small/${pictureId}"
        alt="${name}">
    <div class="restaurant-item__content">
        <h1 class="restaurant-item__title">
          <a href="${`/#/detail/${id}`}">${name}</a>
        </h1>
        <p class="restaurant-item__description">${description.replace(/^(.{100}[^\s]*).*/, '$1')}</p>
        <div class="restaurant-item__info">
          🌟 ${rating}&nbsp;📍 ${city}
        </div>
    </div>
  </article>
`;

const createMenu = (menu) => {
  let result = '';

  menu.forEach(({ name }) => {
    result += `<li>${name}</li>`;
  });

  return result;
};

const createReview = (reviews) => {
  let result = '';

  reviews.forEach(({ name, review, date }) => {
    result += `
      <div class="restaurant__review-item">
        <div class="restaurant__review-header">
          <span class="review-item__name">${name}</span>
          <span class="review-item__date">${date}</span>
        </div>
        <span class="clr-black">${review}</span>
      </div>`;
  });

  return result;
};

const createDetailTemplate = ({
  name,
  description,
  city,
  address,
  pictureId,
  menus,
  rating,
  customerReviews,
}) => `
  <img src="${CONFIG.BASE_IMAGE_URL}medium/${pictureId}" alt="${name} image" class="restaurant__image">
  
  <h1 id="restaurantDetail" class="restaurant__name">${name}</h1>
  <p class="restaurant__address">${address}, ${city}</p>

  <div class="restauran__rating">
    <span class="clr-orange">🌟 </span> 
    <span class="clr-red"> ${rating}</span>
  </div>
  <p>${description}</p>

  <section class="restaurant__menu">
    <p class="section__title">Menu makanan</p>
    <ul>
      ${createMenu(menus.foods)}
    </ul>

    <p class="section__title">Menu minuman</p>
    <ul>
      ${createMenu(menus.drinks)}
    </ul>
  </section>

  <p class="section__title">Ulasan pelanggan</p>
  ${createReview(customerReviews)}
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like-btn">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like-btn">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createItemTemplate,
  createDetailTemplate,
  createLikeButtonTemplate,
  createUnlikeButtonTemplate,
};
