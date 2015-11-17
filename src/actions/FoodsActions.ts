import AppDispatcher from '../dispatcher/AppDispatcher';
import FoodsActionTypes from '../constants/action-types/FoodsActionTypes';

export function foodChanged(food: string) {
  AppDispatcher.dispatch({
    food,
    type: FoodsActionTypes.FOOD_CHANGED,
  });
}
