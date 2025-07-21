import { useReducer, useEffect } from "react";

const url = "https://restcountries.com/v3.1/";

const ACTIONS = {
  MAKE_REQUEST: "make-request",
  GET_DATA: "get-data",
  ERROR: "error",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { isLoading: true, countries: [] };
    case ACTIONS.GET_DATA:
      return { isLoading: false, countries: [...action.payload] };
    case ACTIONS.ERROR:
      return { isLoading: false, error: action.payload, countries: [] };
    default:
      return state;
  }
}

export default function useFetch(searchInput) {  
  const [state, dispatch] = useReducer(reducer, {
    countries: [],
    isLoading: true,
  });



  useEffect(() => {
    const fetCountries = () => {
      dispatch({ type: ACTIONS.MAKE_REQUEST });

      fetch(url + searchInput)
        .then((response) => response.json())
        .then((data) => {
          if (data.status === 404) {
            dispatch({ type: ACTIONS.ERROR, payload: data });
          } else {
            dispatch({ type: ACTIONS.GET_DATA, payload: data });
          }
        })
        .catch((error) => {
          dispatch({ type: ACTIONS.ERROR, payload: error });
        });
    };

    fetCountries();
  }, [searchInput]);

  return state;
}
