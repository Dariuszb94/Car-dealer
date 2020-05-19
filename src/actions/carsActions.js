import {UPDATE_CARS } from './types';

export const updateCars = (updatedCars) => dispatch => {
let car=updatedCars.map(car => {return car});
dispatch({
  type:UPDATE_CARS,
  payload:car
});
};

