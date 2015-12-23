import * as React from 'react/addons';
import * as PureRenderMixin from 'react-addons-pure-render-mixin';
import * as Foods from '../types/FoodsState';
import * as classNames from 'classnames';

interface Props {
  food: Foods.FoodDescription;
}

class Food extends React.Component<Props, any> {
  static mixins = [PureRenderMixin];

  constructor(props) {
    super(props);
  }

  render(): JSX.Element {
    const food = this.props.food;

    var spanClass = classNames({
      'pull-right': true,
      'label': true,
      'label-success': food.answer == Foods.Answer.Yes,
      'label-warning': food.answer == Foods.Answer.Maybe,
      'label-danger': food.answer == Foods.Answer.No
    });

    var spanText = classNames({
      'Yes': food.answer == Foods.Answer.Yes,
      'Maybe': food.answer == Foods.Answer.Maybe,
      'No': food.answer == Foods.Answer.No
    })

    return (
      <div className="panel panel-default">
        <div className="panel-body">
          {food.question}
          <span className={spanClass}>{spanText}</span>
        </div>
      </div>
    );
  }
}

export default Food;
