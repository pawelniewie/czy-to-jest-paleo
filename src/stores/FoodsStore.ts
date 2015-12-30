import FluxStore from './FluxStore';
import FoodsActionTypes from '../constants/action-types/FoodsActionTypes';
import AppDispatcher from '../dispatcher/AppDispatcher';
import { FoodsState, Answer, RawFoodDescription, FoodDescription } from '../types/FoodsState';

class FoodsStore extends FluxStore<FoodsState> {
  constructor(dispatcher) {
    super(dispatcher, (): FoodsState => {
      var rawFoods: Array<RawFoodDescription> = ['@foods.json'];

      var foods: Array<FoodDescription> = rawFoods
        .filter((food) => (food.todo !== undefined && food.todo == false))
        .map((food: RawFoodDescription) => ({
          answer: Answer[food.answer],
          question: food.question
      }));

      return { whatFood: '', foods: foods };
    });
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
