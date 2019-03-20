const initialState = {
  messages: [],
  isFetched: false,
}

export default function reducer(state = initialState, action) {

  let messages;
  
  switch (action.type) {
    case "GET_MESSAGES_SUCCESS":
      return {
        ...state,
        messages: action.payload,
        isFetched: true
      }

    case "POST_MESSAGES_SUCCESS":
      messages = [...state.messages, action.payload];
      
      return {
        ...state,
        messages: messages
      }
    
    default:
      return state;
  }
}

