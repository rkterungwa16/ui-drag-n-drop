import React from "react";
import { useDrag, useDrop } from 'react-dnd';
import ListContainerStyle from "./style";
import ListHeader from "../ListHeader/ListHeader";
import ListCards from "../ListCards/ListCards";
import { ListInterface } from "../../types";

interface LisContainerProps extends ListInterface {
  moveListHandler: (listId: string, nextListId: string) => void;
}
const ListContainer = (props: LisContainerProps) => {
  const ref = React.useRef(null);
  const [{ isDragging }, drag] = useDrag({
    item: { type: "list", id: props.id },
    canDrag: true,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [handlerId, drop] = useDrop({
    accept: "list",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }

      const { id: listId } = monitor.getItem();
      if (props.id !== listId) {
        props.moveListHandler(listId, props.id)
      }
    }
  });

  drag(drop(ref));
  return (
    <ListContainerStyle key={props.id} isDragging={isDragging} ref={ref}>
      <ListHeader title={props.title} />
      <ListCards {...props} />
    </ListContainerStyle>
  )
}

export default ListContainer;
