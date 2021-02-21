import React from "react";
import ListWrapperStyle from "./style";
import ListContainer from "../ListContainer/ListContainer";
import BoardContext from "../../Board/BoardContext";
import { ListInterface } from "../../types";


const ListWrapper = () => {
  const { data } = React.useContext(BoardContext) as { data: ListInterface[] };
  return (
    <>
      {
        data.map((listDetail) => {
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
