import FluxStore from './FluxStore';
import GreetingActionTypes from '../constants/action-types/GreetingActionTypes';
import AppDispatcher from '../dispatcher/AppDispatcher';
import FoodsState from '../types/FoodsState';

class FoodsStore extends FluxStore<FoodsState> {
  constructor(dispatcher) {
    super(dispatcher, () => ([{
          foods: [
            {
              question: 'Czy jabłka są paleo?',
              answer:  'tak'
            }
          ]
        }]));
  }

  getState() {
    return this._state
  }

  _onDispatch(action) {
    switch(action.type) {
      case GreetingActionTypes.TARGET_OF_GREETING_CHANGED:
        this._state.targetOfGreeting = action.targetOfGreeting;
        this.emitChange();
        break;
    }
  }
}

const foodsStoreInstance = new FoodsStore(AppDispatcher);
export default foodsStoreInstance;
