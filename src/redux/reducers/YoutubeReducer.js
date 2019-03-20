const initialState = {
  items: [],
  searchValue: "",
  isFetched: false,
}

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case "FETCH_PROMOS_SUCCESS":
      return {
        ...state,
        isFetched: true,
        items: action.payload,
      }
    case "WRITE_SEARCH_VALUE":
      return {
        ...state,
        searchValue: action.payload,
      }
    
    default:
      return state;
  }
}


