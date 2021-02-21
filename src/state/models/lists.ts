import data from "../../data";

export interface ListItems {
  id: string;
  description: string;
}

export interface Lists {
  id: string;
  title: string;
  items: ListItems[];
}

export interface QuestionsRequestBody {
  amount: number;
  difficulty: string;
  type: string;
}

export interface Question {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface ListsState {
  lists: Lists[];
}

export const defaultListsState: ListsState = {
  lists: data,
};
