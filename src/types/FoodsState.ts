export enum Answer {
	Yes, No, Maybe
}

export interface RawFoodDescription {
	question: string;
	answer: string;
	todo?: boolean;
}

export interface FoodDescription {
	question: string;
	answer: Answer;
}

export interface FoodsState {
	whatFood: string;
	foods: Array<FoodDescription>;
}	
