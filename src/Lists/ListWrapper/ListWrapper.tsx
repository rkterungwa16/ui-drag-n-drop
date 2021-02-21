import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import ListWrapperStyle from "./style";
import ListContainer from "../ListContainer/ListContainer";
import { ListInterface } from "../../types";
import { StoreState } from "../../state/models";


const ListWrapper = () => {
  const { lists } = useSelector((state: StoreState) => {
    const {
      lists
    } = state.lists;

    return {
      lists
    }
  });
  return (
    <>
      {
        lists.map((listDetail: ListInterface) => {
          return (
            <ListWrapperStyle>
              <ListContainer {...listDetail} />
            </ListWrapperStyle>
          )
        })
      }
    </>
  )
};

export default ListWrapper;
