import React, {PropTypes as PT} from 'react'
import WhatFoodToFind from './WhatFoodToFind'
import FoodsList from './FoodsList'

export class HomeView extends React.Component {

  static propTypes = {
    foods: PT.array.isRequired,
    whatFood: PT.string.isRequired,
    findFood: PT.func.isRequired,
    pushLocation: PT.func.isRequired
  };

  render() {
    return (<div className="container-fluid">
      <div className="text-center">
        <h3>Czy to jest Paleo?</h3>
        <WhatFoodToFind whatFood={ this.props.whatFood } findFood={ this.findAndPush }/>
      </div>
      <FoodsList whatFood={ this.props.whatFood } foods={ this.props.foods }/>
    </div>);
  }

  findAndPush = (food) => {
    this.props.findFood(food);
    this.props.pushLocation('/' + food);
  }
}

export default HomeView
