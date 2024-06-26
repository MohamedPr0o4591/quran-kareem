import { GET_QURAN_DETAILS } from "../Types/allTypes";

const initialState = {
  details: [],
};
export const quranDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_QURAN_DETAILS:
      return {
        details: action.payload,
      };
    default:
      return state;
  }
};
