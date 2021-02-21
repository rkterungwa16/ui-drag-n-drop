import BoardStyle from "./style";
import ListWrapper from "../Lists/ListWrapper/ListWrapper";
import BoardContext from "./BoardContext";

import data from "../data";

const Board = () => {
  return (
    <BoardContext.Provider value={{ data }}>
      <BoardStyle>
        <ListWrapper />
      </BoardStyle>
    </BoardContext.Provider>
  )
}

export default Board;
