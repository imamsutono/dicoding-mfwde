const BASE_URL = 'https://restaurant-api.dicoding.dev/';

const CONFIG = {
  BASE_URL,
  BASE_IMAGE_URL: `${BASE_URL}/images/`,
  CACHE_NAME: new Date().toISOString(),
  DATABASE_NAME: 'luwee-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'restaurants',
};

export default CONFIG;
