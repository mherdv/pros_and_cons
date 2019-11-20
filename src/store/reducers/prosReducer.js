import { ADD_PROS, CHANGE_PROS, REMOVE_PROS } from "../types";

const initialState = {
  name: "PROS",
  list: []
};

export default function(store = initialState, action) {
  switch (action.type) {
    case ADD_PROS:
      return { ...store, list: [...store.list, action.payload] };
    case CHANGE_PROS:
      return { ...store, list: [...action.payload] };
    case REMOVE_PROS:
      return { ...store, list: [...action.payload] };
    default:
      return store;
  }
}
