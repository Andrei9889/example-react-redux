import axios from 'axios';

const memesUrl = 'https://api.imgflip.com/get_memes';
export const fetchMemes = (count) => {
  return (dispatch) => {
    axios(`${memesUrl}`)
      .then(response => {
        response.data.data.memes.splice(count);
        dispatch(fetchMemesSuccess(response.data));
      });
  };
};

const memeUrl = 'https://api.imgflip.com/caption_image';
export const createMem = mem => {
  return (dispatch) => {
    axios.post(`${memeUrl}`, mem)
    .then(response => {
      dispatch(createMemSuccess(response.data));
    });
  };
};

const currencyApi = 'http://www.nbrb.by/API/ExRates/Rates/145';
export const fetchCurrency = () => {
  return (dispatch) => {
    axios(`${currencyApi}`)
      .then(response => {
        dispatch(fetchCurrencySuccess(response.data.Cur_OfficialRate));
      });
  };
};

const weatherApi = 'https://api.openweathermap.org/data/2.5/forecast?q=minsk&appid=a94d0a5ac08570add4b47b8da933f247';
export const fetchWeather = () => {
  return (dispatch) => {
    axios(`${weatherApi}`)
      .then(response => {
        dispatch(fetchWeatherSuccess(response.data));
      });
  };
};

const fetchMemesSuccess = memes => ({type: "FETCH_MEMES_SUCCESS", payload: memes});
const createMemSuccess = mem => ({ type: "CREATE_MEM_SUCCESS", payload: mem });
const fetchCurrencySuccess = dollarRate => ({ type: "FETCH_CURRENCY_SUCCESS", payload: dollarRate });
const fetchWeatherSuccess = weather => ({ type: "FETCH_WEATHER_SUCCESS", payload: weather });

export const createBook = book => ({type: 'CREATE_BOOK', payload: book});
export const updateBook = bookId => ({type: 'UPDATE_BOOK', payload: bookId});
export const deleteBook = bookId => ({type: 'DELETE_BOOK', payload: bookId});
export const addToFavorites = bookId => ({type: 'ADD_TO_FAVORITES', payload: bookId});
export const removeFromFavorites = bookId => ({type: 'REMOVE_FROM_FAVORITES', payload: bookId});
export const like = bookId => ({type: 'LIKE', payload: bookId});
export const dislike = bookId => ({type: 'DISLIKE', payload: bookId});

export const fetchPromos = searchValue => {
  const urlYoutube = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBrmaj7j0yIJGWcGPYH3THz_Rh8BYAtlQs&q=${searchValue}&type=video`;
  return (dispatch) => {
    axios(`${urlYoutube}`)
      .then(response => {
        dispatch(fetchPromosSuccess(response.data.items));
      });
  };
};

const fetchPromosSuccess = promos  => ({ type: "FETCH_PROMOS_SUCCESS", payload: promos});

export const writeSearchValue = searchValue => ({type: 'WRITE_SEARCH_VALUE', payload: searchValue});

const chatUrl = 'https://serene-mesa-35124.herokuapp.com/api/chats';
export const getMessages = () => dispatch => {
  axios.get(chatUrl)
    .then(response => dispatch(getMessagesSuccess(response.data)))
    .catch(error => dispatch(getMessagesError(error)));
}

const getMessagesSuccess  = messages => ({type: "GET_MESSAGES_SUCCESS", payload: messages})
const getMessagesError    = error => ({type: "GET_MESSAGES_ERROR", payload: error})

export const postMessage = message => dispatch => {
  axios.post(chatUrl, message)
    .then(response => dispatch(postMessagesSuccess(response.data)))
    .catch(error => dispatch(postMessagesError(error)));
}

const postMessagesSuccess = message => ({ type: "POST_MESSAGES_SUCCESS", payload: message })
const postMessagesError   = error => ({ type: "POST_MESSAGES_ERROR", payload: error })

