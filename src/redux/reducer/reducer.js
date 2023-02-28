import { ADD_NUMBER , CLEAR_LIST } from "../actions/action";




const initialState = {
    numbers: [],
  };
  
  function reducer(state = initialState, action) {
    switch (action.type) {
      case ADD_NUMBER:
        const sum =
          state.numbers.length > 0
            ? state.numbers[state.numbers.length - 1] + action.payload
            : action.payload;
        return {
          ...state,
          numbers: [...state.numbers, sum],
        };
      case CLEAR_LIST:
        return {
          ...state,
          numbers: [],
        };
      default:
        return state;
    }
  }
  
  export default reducer;