import * as React from 'react/addons';
import * as FoodsActions from '../actions/FoodsActions';
import * as Foods from '../types/FoodsState';
import Food from './Food';

interface Props {
  whatFood: string;
  foods: Array<Foods.FoodDescription>;
}

class FoodsList extends React.Component<Props, any> {
  constructor(props) {
    super(props);
  }

  static propTypes: React.ValidationMap<Props> = {
    whatFood: React.PropTypes.string.isRequired
  }

  render(): JSX.Element {
    const foods = this.props.foods;
    const whatFood = this.props.whatFood || '';

    var list = foods.filter(function(food) {
      if (food.question === undefined) { debugger; };
      return whatFood === '' || food.question.toLowerCase().indexOf(whatFood.toLowerCase()) > 0;
    }).map((food) => {
      return (
          <Food food={food}/>
        );
    });

    var rows = [], accu = [];
    for (var i = 0; i < list.length; ++i) {
      accu.push(
        (<div className="col-md-6 col-lg-3">{ list[i]}</div>)
      );
      
      if ((i + 1) % 4 == 0) {
        rows.push(
          (<div className="row">{accu}</div>)
        );
        accu = [];
      }
    };

    return (
      <div className="food-list">
        {rows}
      </div>
    );
  }
}

export default FoodsList;
