import {SET_CURRENT_CAR_ID} from './types';

export const updateId= (id) => dispatch => {
dispatch({
  type:SET_CURRENT_CAR_ID,
  payload:id
});
};

