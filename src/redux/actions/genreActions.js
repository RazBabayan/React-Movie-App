import { ADD_GENRES, DELETE_GENRES } from "../constants/genres";

const addItem = (payload) => {
  return {
    type: ADD_GENRES,
    payload
  };
};

const deleteItem = () => {
  return {
    type: DELETE_GENRES,
    payload: []
  };
};

export { addItem, deleteItem };