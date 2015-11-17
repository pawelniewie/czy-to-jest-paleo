import * as React from 'react/addons';

import * as GreetingActions from '../actions/GreetingActions';
import GreetingStore from '../stores/GreetingStore';
import GreetingState from '../types/GreetingState';

import * as FoodsActions from '../actions/FoodsActions';
import FoodsStore from '../stores/FoodsStore';
import FoodsState from '../types/FoodsState';

import WhoToGreet from './WhoToGreet';
import FoodsList from './FoodsList';

interface AppState {
  greeting: GreetingState;
  foods: FoodsState;  
}

class App extends React.Component<any, AppState> {
  constructor(props) {
    super(props);
    this.state = this._getStateFromStores();
  }

  componentWillMount() {
    GreetingStore.addChangeListener(this._onChange);
    FoodsStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    GreetingStore.removeChangeListener(this._onChange);
    FoodsStore.removeChangeListener(this._onChange);
  }

  render() {
    const { greeting } = this.state;
    return (
      <div className="container-fluid">
        <h1>Hello { greeting.targetOfGreeting }</h1>

        <WhoToGreet targetOfGreeting={ greeting.targetOfGreeting } />
        <FoodsList targetOfGreeting={ greeting.targetOfGreeting } />
      </div>
    );
  }

  _onChange = () => {
    this.setState(this._getStateFromStores());
  }

  _getStateFromStores() {
    return {
      greeting: GreetingStore.getState(),
      foods: FoodsStore.getState()
    }
  }
}

export default App;
