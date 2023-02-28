export const ADD_NUMBER = "ADD_NUMBER";
export const CLEAR_LIST = "CLEAR_LIST";

export function addNumber(number) {
    return { type: ADD_NUMBER, payload: number };
  }
  
  export function clearList() {
    return { type: CLEAR_LIST };
  }
  