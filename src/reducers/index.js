import { combineReducers } from 'redux';
import reddit from './reddit';

const mainReducer = combineReducers({
  reddit
});

export default mainReducer;