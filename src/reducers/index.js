import { combineReducers } from 'redux';
import carsReducer from './carsReducer';
import currentCarIdReducer from './currentCarIdReducer';

export default combineReducers({
  cars: carsReducer,
  id: currentCarIdReducer
});