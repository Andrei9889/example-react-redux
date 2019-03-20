const initialState = {
  items: [],
  mainMeme: '',
  isFetched: false,
}

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case "FETCH_MEMES_SUCCESS":
      return {
        ...state,
        isFetched: true,
        items: action.payload.data.memes
      }
    case "CREATE_MEM_SUCCESS":
      return {
        ...state,
        mainMeme: action.payload.data.url
      }

    case "FETCH_USERS_ERROR":
      return state;
    
    default:
      return state;
  }
}





