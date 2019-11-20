import { ADD_CONS, CHANGE_CONS, REMOVE_CONS } from "../types";

const initialState = {
  name: "CONS",
  list: []
};

export default function(store = initialState, action) {
  switch (action.type) {
    case ADD_CONS:
      return { ...store, list: [...store.list, action.payload] };
    case CHANGE_CONS:
      return { ...store, list: [...action.payload] };
    case REMOVE_CONS:
      return { ...store, list: [...action.payload] };
    default:
      return store;
  }
}
