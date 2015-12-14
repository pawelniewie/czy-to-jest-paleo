import * as React from 'react/addons';
import * as FoodsActions from '../actions/FoodsActions';

interface Props {
  whatFood: string;
}

class WhatFoodToFind extends React.Component<Props, any> {
  constructor(props) {
    super(props);
  }

  static propTypes: React.ValidationMap<Props> = {
    whatFood: React.PropTypes.string.isRequired
  }

  render() {
    return (
      <form className="form-inline what-to-find">
        <div className="form-group">
          <label className="sr-only" htmlFor="what-food">Wpisz nazwę jedzenia</label>
          <input type="text" className="form-control input-lg" value={ this.props.whatFood } 
            onChange={ this._handleWhatFoodChange } placeholder="Wpisz i sprawdź" id="what-food"/>
        </div>
      </form>
    );
  }

  _handleWhatFoodChange = (event) => {
    const { target: { value: whatFood } } = event;
    FoodsActions.foodChanged(whatFood);
  }
}

export default WhatFoodToFind;
