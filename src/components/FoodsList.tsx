import * as React from 'react/addons';
import * as FoodsActions from '../actions/FoodsActions';
import * as Foods from '../types/FoodsState';

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
      return whatFood === '' || food.question.toLowerCase().indexOf(whatFood.toLowerCase()) > 0;
    }).map((food) => {
      return (
        <div key={food.question}>{food.question}</div>
        );
    });

    return (
      <div>
        {list}
      </div>
    );
  }
}

export default FoodsList;
