import * as React from 'react';
// import * as FoodsActions from '../actions/FoodsActions';

class WhatFoodToFind extends React.Component {
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
    // const { target: { value: whatFood } } = event;
    // FoodsActions.foodChanged(whatFood);
  }
}

export default WhatFoodToFind;
