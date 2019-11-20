import { ADD_PROS, CHANGE_PROS, REMOVE_PROS } from "../types";
import { uniqueKey } from "../../utils/funtions";

function addProsAction({ value }) {
  const newObj = {
    value,
    key: uniqueKey()
  };

  return {
    type: ADD_PROS,
    payload: newObj
  };
}

function changeProsAction({ event, index, list }) {
  const cloneList = [...list];
  const { value } = event.target;

  if (!value) {
    // remove item

    cloneList.splice(index, 1);
    return {
      type: REMOVE_PROS,

      payload: cloneList
    };
  }

  cloneList[index].value = value;

  return {
    type: CHANGE_PROS,

    payload: cloneList
  };
}

export { addProsAction, changeProsAction };
