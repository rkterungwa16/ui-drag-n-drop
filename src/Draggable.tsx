import React, { ReactElement } from "react";

interface DraggableProps {
  children: ReactElement<any>;
}

const Draggable = (props: DraggableProps) => {
  const [currentPosition, setCurrentPosition] = React.useState({
    x: 0,
    deltaX: 0,
    y: 0,
    deltaY: 0,
  });
  const [dragging, setDragging] = React.useState(false);
  const draggableELement = React.useRef(null) as { [x: string]: any };
  React.useEffect(() => {
    if (currentPosition.x && currentPosition.y) {
      draggableELement.current.style.top =
        draggableELement.current.offsetTop - currentPosition.deltaY + "px";
      draggableELement.current.style.left =
        draggableELement.current.offsetLeft - currentPosition.deltaX + "px";
    }
  }, [
    currentPosition,
    currentPosition.x,
    currentPosition.y,
    currentPosition.deltaX,
    currentPosition.deltaY,
  ]);

  function onMouseDown(e: MouseEvent) {
    e.preventDefault();
    setCurrentPosition({
      ...currentPosition,
      x: e.clientX,
      y: e.clientY,
    });
    setDragging(true);
  }
  const onMouseMove = React.useCallback(
    (e) => {
      e.preventDefault();
      if (dragging) {
        setCurrentPosition({
          x: e.clientX,
          deltaX: currentPosition.x - e.clientX,
          y: e.clientY,
          deltaY: currentPosition.y - e.clientY,
        });
      }
    },
    [currentPosition.x, currentPosition.y, dragging]
  );

  const onMouseUp = React.useCallback((e) => {
    setDragging(false);
  }, []);

  React.useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseUp);
    return function cleanup() {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseUp);
    };
  }, [onMouseMove, onMouseUp]);

  return (
    <React.Fragment>
      {React.cloneElement(props.children, {
        ref: draggableELement,
        onMouseDown,
        style: {
          cursor: "move",
          position: "absolute",
        },
      })}
    </React.Fragment>
  );
};

export default Draggable;
