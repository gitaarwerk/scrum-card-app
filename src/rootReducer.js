import { combineReducers } from 'redux';
import reduceReducers from 'reduce-reducers';

import appReducer from './reducer';

const rootReducer = appReducer;

export default rootReducer;
