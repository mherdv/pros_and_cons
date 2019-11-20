import { ADD_CONS, CHANGE_CONS, REMOVE_CONS } from "../types";
import { uniqueKey } from "../../utils/funtions";

function addConsAction({ value }) {
  const newObj = {
    value,
    key: uniqueKey()
  };

  return {
    type: ADD_CONS,
    payload: newObj
  };
}

function changeConsAction({ event, index, list }) {
  const cloneList = [...list];
  const { value } = event.target;

  if (!value) {
    // remove item

    cloneList.splice(index, 1);
    return {
      type: REMOVE_CONS,

      payload: cloneList
    };
  }

  cloneList[index].value = value;

  return {
    type: CHANGE_CONS,

    payload: cloneList
  };
}

export { addConsAction, changeConsAction };
