import { defaultListsState, ListsState } from "./lists";

export const defaultState = {
  defaultListsState,
};

export interface StoreState {
  lists: ListsState;
}
