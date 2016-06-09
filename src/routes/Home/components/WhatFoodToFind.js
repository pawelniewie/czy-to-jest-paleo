import * as React from 'react';
import DebounceInput from 'react-debounce-input';

class WhatFoodToFind extends React.Component {
  render() {
    return (
      <form className="form-inline what-to-find">
        <div className="form-group">
          <label className="sr-only" htmlFor="what-food">Wpisz nazwę jedzenia</label>
          <DebounceInput type="text" className="form-control input-lg" value={ this.props.whatFood }
                         debounceTimeout={150} onChange={ this._handleWhatFoodChange } placeholder="Wpisz i sprawdź" id="what-food"/>
        </div>
      </form>
    );
  }

  _handleWhatFoodChange = (event) => {
    const { target: { value: whatFood } } = event;
    this.props.findFood(whatFood);
  }
}

export default WhatFoodToFind;
