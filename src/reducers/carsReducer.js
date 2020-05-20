import { UPDATE_CARS} from '../actions/types';
const initialState ={};
export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_CARS:
      return {
        ...state,
        cars:action.payload
      }
      default: 
      return state;
  }
}