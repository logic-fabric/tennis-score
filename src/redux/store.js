import { createStore } from "redux";

import { initialState, scoreReducer } from "./reducer.js";

export const store = createStore(scoreReducer, initialState);
