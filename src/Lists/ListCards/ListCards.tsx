// Wrap this component in a scroll bar component.
import ListCard from "../ListCard/ListCard";
import ListCardsStyle from "./style";
import { ListInterface } from "../../types";
interface ListCardsProps extends ListInterface { };

const ListCards = (props: ListCardsProps) => {

  return (
    <ListCardsStyle>
      {
        props.items.map((item) => {
          return <ListCard key={item.id} description={item.description} />
        })
      }
    </ListCardsStyle>
  )
}
export default ListCards;
