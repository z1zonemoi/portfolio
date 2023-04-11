import { useRef } from "react";
import { useRecoilValue } from "recoil";

import { navIndexState } from "./atom";

const useMoveElement = () => {
  const id = useRecoilValue(navIndexState);

  const navClassName = (className, index) => {
    let applyClassName = "navRight";

    if (className) {
      applyClassName = className;
    }

    if (!(id === index) || index === 0) {
      return applyClassName;
    } else {
      return (applyClassName += " focusNav");
    }
  };

  const element = useRef([]);
  const moveToElement = (index) => {
    element.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return { element, moveToElement, navClassName };
};

export default useMoveElement;
