const envs = {
  writable: true,
  dev: {
    writable: true,
    BASE_URL_WS: 'http://localhost:3333/api/',
    API: {
      GREEKS: 'figures',
      BOOKS: 'books',
      QUOTES: 'quotes',
      RANDOM_QUOTE: 'quotes/random',
      USER_LOGIN: 'users/signin',
      USER_SIGN_UP: 'users/signup'
    },
    firebaseConf: {
      apiKey: 'AIzaSyApW4lHNF64NJ4FNwvwvc-lIhyrzG9E09s',
      authDomain: 'mythology-268a0.firebaseapp.com',
      databaseURL: 'https://mythology-268a0.firebaseio.com',
      storageBucket: 'mythology-268a0.appspot.com',
      messagingSenderId: '912671768924',
    },
  },
  // les urls de production tapent en recette avant la mise en production effective
  production: {
    BASE_URL_WS: 'http://localhost:3000/api/',
  },
};

// pour eviter de dupliquer les variables identiques
const envGlobal = {};

const getEnvironment = () => {
  const chosenEnv = process.env.NODE_ENV === 'development' ? 'dev' : 'production';
  // spread object non disponible hors react
  return Object.assign(envGlobal, envs[chosenEnv]);
};

export default getEnvironment;
