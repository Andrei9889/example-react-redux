const initialState = {
  currency: '',
}

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case "FETCH_CURRENCY_SUCCESS":
      return {
        ...state,
        currency: action.payload,
      }
    
    default:
      return state;
  }
}





