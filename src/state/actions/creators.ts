import { Dispatch, Action } from "redux";
import { withDataAction } from "./utils";
import { CardActions  } from "./types"

export const moveCard = (cardCoord: {
  lastX: string,
  lastY: string,
  nextX: string,
  nextY: string
}) => {
  return (dispatch: Dispatch<Action<any>>) => {
    dispatch(
      withDataAction(CardActions.MOVE_CARD, cardCoord)
    );
  };
};
