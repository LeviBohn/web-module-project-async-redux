import axios from 'axios';

export const FETCH_CAT_FACT_REQUEST = 'FETCH_CAT_FACT_REQUEST';
export const FETCH_CAT_FACT_SUCCESS = 'FETCH_CAT_FACT_SUCCESS';
export const FETCH_CAT_FACT_FAILURE = 'FETCH_CAT_FACT_FAILURE';

export const fetchCatFact = () => dispatch => {
    dispatch({ type: FETCH_CAT_FACT_REQUEST });
    axios
        .get('https://catfact.ninja/fact')
        .then(res =>
            dispatch({
                type: FETCH_CAT_FACT_SUCCESS,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: FETCH_CAT_FACT_FAILURE,
                payload: err.message
            })
        )
};











    // try {
    //     const response = await axios.get('https://catfact.ninja/fact');
    //     dispatch({
    //         type: FETCH_CAT_FACT_SUCCESS,
    //         payload: response.data
    //     });
    // } catch (error) {
    //     dispatch({
    //         type: FETCH_CAT_FACT_FAILURE,
    //         payload: error.message
    //     });
    // }