import styled, { ThemedStyledProps } from "styled-components";

export interface ListContainerStylerops extends ThemedStyledProps<any, any> {
  isDragging?: boolean;
}
const ListContainerStyle = styled.div.attrs((props: ListContainerStylerops) => ({
  isDragging: props.isDragging
}))`
  background-color: #ebecf0;
  border-radius: 3px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-height: 100%;
  position: relative;
  white-space: normal;
  ${(props) => {
    if (props.isDragging) {
      return `
        background: #000
        opacity: 0.4;
      `
    }
  }}
`;
ListContainerStyle.defaultProps = {
  isDragging: false
}
export default ListContainerStyle;
