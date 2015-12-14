import * as React from 'react/addons';

import * as FoodsActions from '../actions/FoodsActions';
import FoodsStore from '../stores/FoodsStore';
import { FoodsState } from '../types/FoodsState';

import WhatFoodToFind from './WhatFoodToFind';
import FoodsList from './FoodsList';

interface AppState {
  foods: FoodsState;  
}

class App extends React.Component<any, AppState> {
  constructor(props) {
    super(props);
    this.state = this._getStateFromStores();
  }

  componentWillMount() {
    FoodsStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    FoodsStore.removeChangeListener(this._onChange);
  }

  render() {
    const { foods } = this.state;
    return (
      <div className="container-fluid">
        <div className="text-center">
          <h3>Czy to jest Paleo?</h3>
          <WhatFoodToFind whatFood={ foods.whatFood } />
        </div>
        <FoodsList whatFood={ foods.whatFood } foods={ foods.foods } />
      </div>
    );
  }

  _onChange = () => {
    this.setState(this._getStateFromStores());
  }

  _getStateFromStores() {
    return {
      foods: FoodsStore.getState()
    }
  }
}

export default App;
