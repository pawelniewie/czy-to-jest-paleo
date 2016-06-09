import * as React from 'react';
// import * as FoodsActions from '../actions/FoodsActions';
// import * as Foods from '../types/FoodsState';
import classNames from 'classnames';
import Food from './Food';

class FoodsList extends React.Component {
  render() {
    const foods = this.props.foods;
    const whatFood = this.props.whatFood || '';

    var list = foods.filter(function(food) {
      if (food.question === undefined) {
        debugger;
      }
      return whatFood === '' || food.question.toLowerCase().indexOf(whatFood.toLowerCase()) >= 0;
    }).map((food) => {
      return (
        <Food key={food.question} food={food}/>
      );
    });

    var divClass = classNames({
      'food-list': true,
      'short': list.length < 10
    });

    return (
      <div className={divClass}>
        {list}
      </div>
    );
  }
}

export default FoodsList;
