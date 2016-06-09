import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import homeReducer from 'routes/Home/modules/home'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    foods: homeReducer,
    router,
    ...asyncReducers
  })
};

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer;
  store.replaceReducer(makeRootReducer(store.asyncReducers))
};

export default makeRootReducer
