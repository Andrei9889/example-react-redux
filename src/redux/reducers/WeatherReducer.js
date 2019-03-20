const initialState = {
  list: [],
  city: '',
  country: '',
  isFetched: false,
}

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case "FETCH_WEATHER_SUCCESS":
      return {
        ...state,
        list: action.payload.list, 
        city: action.payload.city.name, 
        country: action.payload.city.country, 
        isFetched: true,
      }
    
    default:
      return state;
  }
}
