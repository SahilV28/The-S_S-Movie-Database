import axios from "../../utils/Axios";
import { loadmovie } from "../reducers/movieSlice";

export { removemovie } from "../reducers/movieSlice";

export const ayncloadmovie = (id) => async (dispatch, getstate) => {
  try {
    const detail = await axios.get(`/movie/${id}`);
    const externalId = await axios.get(`/movie/${id}/external_ids`);
    const recommendations = await axios.get(`/movie/${id}/recommendations`);
    const similar = await axios.get(`/movie/${id}/similar`);
    const translations = await axios.get(`/movie/${id}/translations`);
    const videos = await axios.get(`/movie/${id}/videos`);
    const watchProvider = await axios.get(`/movie/${id}/watch/providers`);

    let theUltimateData = {
      detail: detail.data,
      externalId: externalId.data,
      recommendations: recommendations.data.results,
      similar: similar.data.results,
      translations: translations.data.translations.map(t => t.name),
      videos: videos.data.results.find((m) => m.type === "Trailer"),
      watchProvider: watchProvider.data.results.IN,
    };

    dispatch(loadmovie(theUltimateData));
    // console.log(theUltimateData);

  } catch (error) {
    console.log("Error : ", error);
  }
};
