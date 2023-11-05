import {
    FETCH_CAT_FACT_REQUEST,
    FETCH_CAT_FACT_SUCCESS,
    FETCH_CAT_FACT_FAILURE,
} from '../actions/catFactActions';

const initialState = {
    loading: false,
    fact: '',
    error: '',
};

function catFactReducer (state = initialState, action) {
    console.log('catFactReducer', action);
    switch (action.type) {
        case FETCH_CAT_FACT_REQUEST:
            return {
                ...state,
                loading: true,
                error: '',
            };
        case FETCH_CAT_FACT_SUCCESS:
            return {
                ...state,
                loading: false,
                fact: action.payload.fact,
                error: '',
            };
        case FETCH_CAT_FACT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
};

export default catFactReducer;