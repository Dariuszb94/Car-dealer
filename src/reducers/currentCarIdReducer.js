import { SET_CURRENT_CAR_ID} from '../actions/types';
/*
const initialState = {
  items: [],
  item: {}
};
*/
const initialState ="";

export default function(state = initialState, action) {

  switch (action.type) {
    case SET_CURRENT_CAR_ID:
      return {
        ...state,
        id:action.payload
      }
      default: 
      return state;
  }
}