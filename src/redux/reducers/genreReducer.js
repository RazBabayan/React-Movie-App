import { ADD_GENRES, DELETE_GENRES } from "../constants/genres";

const initialState = {
  genres: [],
};

export const genreReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GENRES:
      return {
        ...state,
        genres: action.payload,
      };

    case DELETE_GENRES:
      return {
        ...state,
        genres: [],
      };
    default:
      return state;
  }
};