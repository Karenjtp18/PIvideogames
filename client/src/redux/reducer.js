import { GET_VIDEO_GAMES } from "./actions";
import { GET_VIDEO_DETAIL } from "./actions";
import { SEARCH_BAR } from "./actions";
import { GET_GENRES } from "./actions";
import { FILTER_ORIGIN } from "./actions";
import { FILTER_GENRES } from "./actions";
import { ORDER_NAME } from "./actions";
import { ORDER_RATING } from "./actions";

const initialState = {
  videoGames: [],
  genres: [],
  gameDetail: [],
  copiaVideoGames: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEO_GAMES:
      return {
        ...state,
        videoGames: action.payload,
        copiaVideoGames: action.payload,
      };
    case GET_VIDEO_DETAIL:
      return {
        ...state,
        gameDetail: action.payload,
      };

    case SEARCH_BAR:
      return {
        ...state,
        videoGames: action.payload,
      };

    case GET_GENRES:
      return { ...state, genres: action.payload };

    // case FILTER_ORIGIN:
    //   if ("API" === action.payload) {
    //     const filterApi = state.copiaVideoGames.filter(
    //       (e) => e.created !== true
    //     );
    //     return { ...state, videoGames: filterApi };
    //   } else if ("Created" === action.payload) {
    //     const filterDb = state.videoGames.filter((e) => e.created === true);
    //     return { ...state, videoGames: filterDb };
    //   } else {
    //     return { ...state, videoGames: state.copiaVideoGames };
    //   }

    case FILTER_ORIGIN:
      if ("API" === action.payload) {
        const filterApi = state.copiaVideoGames.filter(
          (e) => e.created !== true
        );
        return { ...state, videoGames: filterApi };
      } else if ("Created" === action.payload) {
        const filterCreated = state.copiaVideoGames.filter(
          (e) => e.created === true
        );
        return { ...state, videoGames: filterCreated };
      } else {
        return { ...state, videoGames: state.copiaVideoGames };
      }

    case FILTER_GENRES:
      const filterByGenres = state.copiaVideoGames.filter((e) =>
        e.genres.includes(action.payload)
      );
      return { ...state, videoGames: filterByGenres };

    case ORDER_NAME:
      let copialin = [...state.videoGames];

      let orderName =
        action.payload === "a-z"
          ? copialin.sort((a, b) => {
              if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
              } else if (b.name.toLowerCase() > a.name.toLowerCase()) {
                return -1;
              } else {
                return 0;
              }
            })
          : copialin.sort(function (a, b) {
              if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return -1;
              } else if (b.name.toLowerCase() > a.name.toLowerCase()) {
                return 1;
              } else {
                return 0;
              }
            });

      return { ...state, videoGames: orderName };

    case ORDER_RATING:
      let copialin2 = [...state.videoGames];

      let orderRating =
        action.payload === "1-9"
          ? copialin2.sort((a, b) => {
              if (a.rating > b.rating) {
                return -1;
              } else if (b.rating > a.rating) {
                return 1;
              } else {
                return 0;
              }
            })
          : copialin2.sort(function (a, b) {
              if (a.rating > b.rating) {
                return 1;
              } else if (b.rating > a.rating) {
                return -1;
              } else {
                return 0;
              }
            });
      return { ...state, videoGames: orderRating };

    default:
      return { ...state };
  }
};
export default reducer;
