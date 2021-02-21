import ListContainerStyle from "./style";
import ListHeader from "../ListHeader/ListHeader";
import ListCards from "../ListCards/ListCards";
import { ListInterface } from "../../types";

interface LisContainerProps extends ListInterface {}
const ListContainer = (props: LisContainerProps) => (
  <ListContainerStyle>
    <ListHeader title={props.title} />
    <ListCards {...props} />
  </ListContainerStyle>
);

export default ListContainer;
