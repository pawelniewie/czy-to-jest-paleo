import * as React from 'react/addons';
import App from '../../src/components/App';
import WhatFoodToFind from '../../src/components/WhatFoodToFind';
import FoodsStore from '../../src/stores/FoodsStore';

const { TestUtils } = React.addons;

describe('App', () => {
  it('renders expected HTML', () => {
    const app = render({ targetOfGreeting: 'Benjamin' });
    expect(app).toEqual(
      <div className="container-fluid">
        <h1>Hello { 'Benjamin' }</h1>

        <WhatFoodToFind targetOfGreeting={ 'Benjamin' } />
      </div>
    );
  });

  function render(state) {
    const shallowRenderer = TestUtils.createRenderer();
    spyOn(FoodsStore, 'getState').and.returnValue(state);

    shallowRenderer.render(<App />);
    return shallowRenderer.getRenderOutput();
  }
});
