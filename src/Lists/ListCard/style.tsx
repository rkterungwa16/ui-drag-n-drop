import styled from "styled-components";

const ListCard = styled.div`
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgb(9 30 66 / 25%);
  cursor: pointer;
  display: block;
  margin-bottom: 8px;
  max-width: 300px;
  min-height: 100px;
  position: relative;
  text-decoration: none;
  z-index: 0;
  padding: 6px 8px 2px;

  &:hover {
    background: #f7f7f7;
  }
`;

export default ListCard;
