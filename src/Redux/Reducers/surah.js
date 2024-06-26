import { GET_SURAHS } from "../Types/allTypes";

const initialState = {
  surah: [],
};
export const surahReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SURAHS:
      return {
        surah: action.payload,
      };
    default:
      return state;
  }
};
