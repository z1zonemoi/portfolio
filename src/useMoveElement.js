import { useRef } from "react";

const useMoveElement = () => {
  const element = useRef();
  const moveToElement = () => {
    console.log(element);
    element.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return { element, moveToElement };
};

export default useMoveElement;
