import * as React from 'react/addons';
import WhatFoodToFind from '../../src/components/WhatFoodToFind';
import * as FoodsActions from '../../src/actions/FoodsActions';

const { TestUtils } = React.addons;

describe('WhatFoodToFind', () => {
  let handleSelectionChangeSpy: jasmine.Spy;
  beforeEach(() => {
    handleSelectionChangeSpy = jasmine.createSpy('handleSelectionChange');
  });

  it('given a whatFood of \'Benjamin\' then it renders an input containing that text', () => {
    const whatFood = 'Benjamin';
    const whatFoodToFind = render({ whatFood });

    expect(whatFoodToFind.type).toBe('input');
    expect(whatFoodToFind.props.type).toBe('text');
    expect(whatFoodToFind.props.value).toBe(whatFood);
  });

  it('onChange triggers a foodChanged action', () => {
    const whatFood = 'Benjamin';
    const whatFoodToFind = render({ whatFood });
    spyOn(FoodsActions, 'foodChanged');

    whatFoodToFind.props.onChange({ target: { value: whatFood }});

    expect(FoodsActions.foodChanged).toHaveBeenCalledWith(whatFood);
  });

  function render({ whatFood }) {
    const shallowRenderer = TestUtils.createRenderer();
    shallowRenderer.render(<WhatFoodToFind whatFood={ whatFood } />);
    return shallowRenderer.getRenderOutput();
  }
});
