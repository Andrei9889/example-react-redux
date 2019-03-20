const initialState = {
  books: [{title: "Идиот", price: "120", id: 1, autor: "Достоевский", like: 0, dislike: 0,},
          {title: "Псовая охота", price: "90", id: 2, autor: "Некрасов", like: 4, dislike: 2,},
          {title: "Гарри Поттер", price: "80", id: 3, autor: "Роулинг", like: 2, dislike: 0,},
          {title: "Том Сойер", price: "140", id: 4, autor: "Марк Твен", like: 1, dislike: 1,}],
  currentId: 5,
  favorites :{"1": true, "3": true},
  autors: ['Достоевский', 'Роулинг', 'Ахматова', 'Некрасов', 'Марк Твен', 'Мертенс'],
}

export default function reducer(state = initialState, action){
  switch (action.type) {
    case 'CREATE_BOOK':
      return {
        ...state, 
        books: [...state.books, {...action.payload, id: state.currentId, like: 0, dislike: 0,}],
        currentId: state.currentId + 1
      };
    case 'ADD_TO_FAVORITES':
      return{
        ...state, 
        favorites: {...state.favorites, ...action.payload},
      }
    case 'REMOVE_FROM_FAVORITES':
      let newFavorites = state.favorites;
      delete newFavorites[action.payload];
      return{
        ...state, 
        favorites: newFavorites,
      }
    case 'DELETE_BOOK':
      const books = state.books.filter(book => book.id != action.payload);
      return {
        ...state, books: [...books]
      }
    case 'LIKE':
      const arrLike = state.books.map(book => {
        if(book.id===action.payload){
          book.like++
          return book;
        }
        else return book;
      });
      return {
        ...state, books: [...arrLike]
      }
    case 'DISLIKE':
      const arrDislike = state.books.map(book => {
        if(book.id===action.payload){
          book.dislike++
          return book;
        }
        else return book;
      });
      return {
        ...state, books: [...arrDislike]
      }
    default: 
      return state;
  }
}