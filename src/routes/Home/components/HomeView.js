import React, { PropTypes as PT } from 'react'
import WhatFoodToFind from './WhatFoodToFind'
import FoodsList from './FoodsList'

export const HomeView = (props) => (
  <div className="container-fluid">
    <div className="text-center">
      <h3>Czy to jest Paleo?</h3>
      <WhatFoodToFind whatFood={ props.whatFood } findFood={ props.findFood }/>
    </div>
    <FoodsList whatFood={ props.whatFood } foods={ props.foods } />
  </div>
);

HomeView.propTypes = {
  foods: PT.array.isRequired,
  whatFood: PT.string.isRequired,
  findFood: PT.func.isRequired
};

export default HomeView
