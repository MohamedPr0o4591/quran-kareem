import axios from "axios";
import {
  GET_ALL_QURAN,
  GET_AYAHS_BY_JUZ,
  GET_QURAN_DETAILS,
  GET_SURAHS,
} from "../Types/allTypes";

export const getAllQuran = (_) => {
  return async (dispatch) => {
    const res = await axios.get(
      `${import.meta.env.VITE_API}/v1/quran/${import.meta.env.VITE_EDITION}`
    );

    dispatch({
      type: GET_ALL_QURAN,
      payload: res.data.data.surahs,
    });
  };
};

export const getAyahsByJuz = (juz) => {
  return async (dispatch) => {
    let res = await axios.get(
      `${import.meta.env.VITE_API}/v1/juz/${juz}/${
        import.meta.env.VITE_EDITION
      }`
    );

    dispatch({
      type: GET_AYAHS_BY_JUZ,
      payload: res.data.data.ayahs,
    });
  };
};

export const getQuranDetails = (_) => {
  return async (dispatch) => {
    let res = await axios.get(`${import.meta.env.VITE_API}/v1/meta`);

    dispatch({
      type: GET_QURAN_DETAILS,
      payload: res.data.data,
    });
  };
};

export const getSurah = (num) => {
  return async (dispatch) => {
    let res = await axios.get(
      `${import.meta.env.VITE_API}/v1/surah/${num}/${
        import.meta.env.VITE_EDITION
      }`
    );

    dispatch({
      type: GET_SURAHS,
      payload: res.data.data,
    });
  };
};
