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
      const { data: cardCoords } = action;
      return {
        ...state,
        lists: [...state.lists, cardCoords],
      };

    case CardActions.MOVE_LIST:
      const { data: listCoord } = action;
      const currentList = [...state.lists];
      const currentItem = currentList.splice(listCoord.currentX, 1)[0];
      currentList.splice(listCoord.nextX, 0, currentItem);
      return {
        ...state,
        lists: [...currentList],
      };

    default:
      return state;
  }
}
