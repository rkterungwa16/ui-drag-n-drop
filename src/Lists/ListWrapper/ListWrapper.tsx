import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import ListWrapperStyle from "./style";
import ListContainer from "../ListContainer/ListContainer";
import { ListInterface } from "../../types";
import { StoreState } from "../../state/models";
import { moveCard, moveList } from "../../state/actions/creators";


const ListWrapper = () => {
  const dispatch = useDispatch();
  const moveCardAction = bindActionCreators(moveCard, dispatch);
  const moveListAction = bindActionCreators(moveList, dispatch);

  const { lists } = useSelector((state: StoreState) => {
    const {
      lists
    } = state.lists;

    return {
      lists
    }
  });
  const moveListHandler = (currentListId: string, nextListId: string) => {
    const currentList = lists.find(list => list.id === currentListId) as ListInterface;
    const nextList = lists.find(list => list.id === nextListId) as ListInterface;
    moveListAction({
      currentX: lists.indexOf(currentList),
      nextX: lists.indexOf(nextList)
    })
  }
  return (
    <>
      {
        lists.map((listDetail: ListInterface) => {
          return (
            <ListWrapperStyle key={`wrapper-${listDetail.id}`} >
              <ListContainer
                key={`container-${listDetail.id}`}
                {...listDetail}
                moveListHandler={moveListHandler}
              />
            </ListWrapperStyle>
          )
        })
      }
    </>
  )
};

export default ListWrapper;
