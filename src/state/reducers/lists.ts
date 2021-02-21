import { AnyAction } from "redux";

import { ListsState, defaultListsState } from "../models/lists";
import { CardActions } from "../actions/types";

export default function listReducer(
  state: ListsState = defaultListsState,
  action: AnyAction
): ListsState {
  switch (action.type) {
    case CardActions.TOGGLE_DRAGGING:
      const { data: lists } = action;
      return {
        ...state,
        lists,
      };

    case CardActions.MOVE_CARD:
      const { data } = action;
      return {
        ...state,
        lists: [...state.lists, data],
      };

    default:
      return state;
  }
}
