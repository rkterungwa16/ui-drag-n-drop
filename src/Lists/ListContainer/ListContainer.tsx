import { useDrag } from 'react-dnd';
import ListContainerStyle from "./style";
import ListHeader from "../ListHeader/ListHeader";
import ListCards from "../ListCards/ListCards";
import { ListInterface } from "../../types";

interface LisContainerProps extends ListInterface {}
const ListContainer = (props: LisContainerProps) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: props.id },
    canDrag: true,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <ListContainerStyle key={props.id} isDragging={isDragging} ref={drag}>
      <ListHeader title={props.title} />
      <ListCards {...props} />
    </ListContainerStyle>
  )
}

export default ListContainer;
