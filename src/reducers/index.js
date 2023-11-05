import { combineReducers } from 'redux';
import catFactReducer from './catFactReducer';

const rootReducer = combineReducers({
    CatFact: catFactReducer,
});

export default rootReducer;