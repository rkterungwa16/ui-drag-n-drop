import { Dispatch, Action } from "redux";
import { withDataAction } from "./utils";
import { CardActions  } from "./types"

export const moveCard = (cardCoord: {
  currentX: number,
  currentY: number,
  nextX: number,
  nextY: number
}) => (dispatch: Dispatch<Action<any>>) => {
  dispatch(
    withDataAction(CardActions.MOVE_CARD, cardCoord)
  );
};

export const moveList = (listCord: {
  currentX: number,
  nextX: number
}) => (dispatch: Dispatch<Action<any>>) => {
  dispatch(
    withDataAction(CardActions.MOVE_LIST, listCord)
  )
}
