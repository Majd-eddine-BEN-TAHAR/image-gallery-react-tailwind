import { useEffect, useReducer } from "react";

const ACTIONS = {
  MAKE_REQUEST: "make_request",
  GET_DATA: "get_data",
  ERROR: "error",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };

    case ACTIONS.GET_DATA:
      return {
        ...state,
        loading: false,
        imagesData: action.payload.imagesData,
      };

    case ACTIONS.ERROR:
      return { ...state, error: action.payload.error, loading: false };
    default:
      return state;
  }
};

const useFetchImages = (term, category) => {
  const [state, dispatch] = useReducer(reducer, {
    imagesData: [],
    error: null,
    loading: false,
  });

  useEffect(() => {
    // send request after 300ms to not spam your server
    const cancelRequestTimer = setTimeout(() => {
      dispatch({ type: ACTIONS.MAKE_REQUEST });
      const URL =
        "https://pixabay.com/api/?key=" +
        process.env.REACT_APP_PIXABAY_KEY +
        "&q=" +
        encodeURIComponent(term) +
        `&category=${category}`;

      fetch(URL)
        .then((res) => res.json())
        .then((res) => {
          dispatch({
            type: ACTIONS.GET_DATA,
            payload: { imagesData: res.hits },
          });
        })
        .catch((err) => {
          dispatch({ type: ACTIONS.ERROR, payload: { error: err } });
        });
    }, 300);

    return () => {
      // clear the timeout if the component was re-rendred
      clearTimeout(cancelRequestTimer);
    };
  }, [term, category]);

  const error = state.error;
  const imagesData = state.imagesData;
  const loading = state.loading;
  return { error, imagesData, loading };
};

export default useFetchImages;
