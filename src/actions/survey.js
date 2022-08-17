import axios from "axios";
import {
  SURVEY_ADD_FAIL,
  SURVEY_ADD_REQUEST,
  SURVEY_ADD_SUCCESS,
  SURVEY_LIST_REQUEST,
  SURVEY_LIST_SUCCESS,
} from "./constants/product";

const listSurvey = () => async (dispatch) => {
  try {
    dispatch({ type: SURVEY_LIST_REQUEST });
    const { data } = await axios.get("http://sur-ap-1.herokuapp.com/survey");
    dispatch({ type: SURVEY_LIST_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

const addSurvey =
  (name,email,gender,size) =>
  async (dispatch, getState) => {
    dispatch({
      type: SURVEY_ADD_REQUEST,
      payload: {
        name,
        email,
        gender,
        size
        
      },
    });

    // const {
    //   userSignin: { userInfo },
    // } = getState();
    try {
      const { data } = await axios.post("http://sur-ap-1.herokuapp.com/users", {
        name,
        email,
        gender,
        size
        
      });

      dispatch({ type: SURVEY_ADD_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: SURVEY_ADD_FAIL, payload: error.message });
    }
  };

export { listSurvey, addSurvey };
