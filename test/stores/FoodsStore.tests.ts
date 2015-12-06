import FoodsStore from '../../src/stores/FoodsStore';
import FoodsActionTypes from '../../src/constants/action-types/FoodsActionTypes';

const registeredCallback = FoodsStore._onDispatch.bind(FoodsStore);

describe('FoodsStore', () => {
  beforeEach(() => {
    FoodsStore._cleanState();
  });

  it('given no actions, whatFood should be \'James\'', () => {
    const { whatFood } = FoodsStore.getState();

    expect(whatFood).toEqual('James');
  });

  it('given an action with a whatFood of \'Benjamin\', the state whatFood should be \'Benjamin\'', () => {
    [{
      whatFood: 'Benjamin',
      type: FoodsActionTypes.FOOD_CHANGED,
    }].forEach(registeredCallback);

    const { whatFood } = FoodsStore.getState();

    expect(whatFood).toEqual('Benjamin');
  });
});
