import {
  SURVEY_ADD_FAIL,
  SURVEY_ADD_REQUEST,
  SURVEY_ADD_SUCCESS,
  SURVEY_LIST_FAIL,
  SURVEY_LIST_REQUEST,
  SURVEY_LIST_SUCCESS,
} from "../actions/constants/product";


const surveyListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case SURVEY_LIST_REQUEST:
      return { loading: true };

    case SURVEY_LIST_SUCCESS:
      return { loading: false, products: action.payload };

    case SURVEY_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

const surveyAddReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case SURVEY_ADD_REQUEST:
      return { loading: true };

    case SURVEY_ADD_SUCCESS:
      return { loading: false, success: true, product: action.payload };

    case SURVEY_ADD_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};




export { surveyListReducer, surveyAddReducer };
