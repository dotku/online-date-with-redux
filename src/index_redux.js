import * as qs from 'query-string';
import { applyMiddleware, createStore } from "redux";
import axios from "axios";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

const initialState = {
  fetching: false,
  fetched: false,
  users: [],
  error: null,
  query: {
    results: 10
  }
};

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case "FETCH_CANDIDATES_PENDING": {
      return {...state, fetching: true}
    }
    case "FETCH_CANDIDATES_REJECTED": {
      return {...state, fetching: false, error: action.payload}
    }
    case "FETCH_CANDIDATES": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        users: action.payload,
      }
    }
    default: {
      return {...state, fetching: false, error: 'unexpected case'}
    }
  }
}

const middleware = applyMiddleware(promise(), thunk, logger());
const store = createStore(reducer, middleware);
const apiURL = 'https://randomuser.me/api/?' + qs.stringify(initialState.query);
console.log(apiURL);

store.dispatch({
  type: "FETCH_CANDIDATES",
  payload: axios.get(apiURL)
})