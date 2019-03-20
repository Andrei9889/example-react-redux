import { combineReducers } from 'redux';

import MemesReducer from './MemesReducer';
import CurrencyReducer from './CurrencyReducer';
import WeatherReducer from './WeatherReducer';
import BooksReducer from './BooksReducer';
import YoutubeReducer from './YoutubeReducer';
import ChatReducer from './ChatReducer';

const reducers = combineReducers({
  memes: MemesReducer,
  currency: CurrencyReducer,
  weather: WeatherReducer,
  books: BooksReducer,
  youtube: YoutubeReducer,
  chat: ChatReducer,
});

export default reducers;