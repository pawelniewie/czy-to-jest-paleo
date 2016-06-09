import * as React from 'react';
import * as PureRenderMixin from 'react-addons-pure-render-mixin';
import * as reactMixin from 'react-mixin';
import { Answer } from '../modules/home';
import classNames from 'classnames';

class Food extends React.Component {
  render() {
    const food = this.props.food;

    var spanClass = classNames({
      'pull-right': true,
      'label': true,
      'label-success': food.answer == Answer.Yes,
      'label-warning': food.answer == Answer.Maybe,
      'label-danger': food.answer == Answer.No
    });

    var spanText = classNames({
      'Tak': food.answer == Answer.Yes,
      'Być może': food.answer == Answer.Maybe,
      'Nie': food.answer == Answer.No
    });

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
