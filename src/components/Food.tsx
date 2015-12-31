import * as React from 'react';
import * as PureRenderMixin from 'react-addons-pure-render-mixin';
import * as reactMixin from 'react-mixin';
import * as Foods from '../types/FoodsState';
import classNames from 'classnames';

interface Props {
  food: Foods.FoodDescription;
}

class Food extends React.Component<Props, any> {
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
      'Tak': food.answer == Foods.Answer.Yes,
      'Być może': food.answer == Foods.Answer.Maybe,
      'Nie': food.answer == Foods.Answer.No
    })

    return (
      <div className="food">
        <div className="panel panel-default">
          <div className="panel-body">
            {food.question}
            <span className={spanClass}>{spanText}</span>
          </div>
        </div>
      </div>
    );
  }
}

reactMixin.onClass(Food, PureRenderMixin);

export default Food;
