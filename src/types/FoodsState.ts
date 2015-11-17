enum Answer {
  Yes, No, Maybe
}

interface FoodDescription {
  question: string;
  answer: Answer;
}

interface FoodsState {
  foods: Array<FoodDescription>;
}

export default FoodsState;
