enum Answer {
  Yes, No, Maybe
}

interface FoodDescription {
  question: string;
  answer: Answer;
}

interface FoodsState {
  whatFood: string;
  foods: Array<FoodDescription>;
}

export default FoodsState;

export FoodDescription;