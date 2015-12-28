import FluxStore from './FluxStore';
import FoodsActionTypes from '../constants/action-types/FoodsActionTypes';
import AppDispatcher from '../dispatcher/AppDispatcher';
import { FoodsState, Answer } from '../types/FoodsState';

class FoodsStore extends FluxStore<FoodsState> {
  constructor(dispatcher) {
    super(dispatcher, () => ({
      whatFood: '',
      foods: ['@foods.json']
    }));
  }

  getState() {
    return this._state
  }

  _onDispatch(action) {
    switch(action.type) {
      case FoodsActionTypes.FOOD_CHANGED:
      this._state.whatFood = action.food;
      this.emitChange();
      break;
    }
  }
}

const foodsStoreInstance = new FoodsStore(AppDispatcher);
export default foodsStoreInstance;
