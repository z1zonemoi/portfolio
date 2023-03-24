import { useRef } from "react";

const useMoveElement = () => {
  const element = useRef([]);
  const moveToElement = (index) => {
    element.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return { element, moveToElement };
};

export default useMoveElement;
