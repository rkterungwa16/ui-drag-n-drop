import ListHeaderStyle from "./style";

interface ListHeaderProps {
  title: string;
}
const ListHeader = (props: ListHeaderProps) => (
  <ListHeaderStyle>
    {props.title}
  </ListHeaderStyle>
)

export default ListHeader;
