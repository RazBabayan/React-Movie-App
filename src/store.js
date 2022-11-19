import { createStore } from "redux";
import { genreReducer } from './redux/reducers/genreReducer';

const store = createStore(genreReducer);

export default store;