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
      <input type="text" value={ this.props.whatFood } onChange={ this._handleWhatFoodChange } />
    );
  }

  _handleWhatFoodChange = (event) => {
    const { target: { value: whatFood } } = event;
    FoodsActions.foodChanged(whatFood);
  }
}

export default WhatFoodToFind;
