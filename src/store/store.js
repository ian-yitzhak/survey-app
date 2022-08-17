import thunk from "redux-thunk";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { surveyAddReducer, surveyListReducer } from "../_reducers/product";

const initialState = {};

const reducer = combineReducers({
  surveyLists: surveyListReducer,
  surveyAdd: surveyAddReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
