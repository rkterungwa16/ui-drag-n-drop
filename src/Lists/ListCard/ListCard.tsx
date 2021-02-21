import ListCardStyle from "./style";

interface ListCardProps {
  description: string;
}
const ListCard = (props: ListCardProps) => (
  <ListCardStyle>
    {props.description}
  </ListCardStyle>
)

export default ListCard;
