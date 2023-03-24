import { useState } from "react";
import styled from "styled-components";

const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  height: 3rem;
  position: fixed;
  top: 0;
  width: 100vw;
  align-items: center;
  background-color: black;
  > h2 {
    color: white;
    :hover {
      cursor: pointer;
    }
  }
  .focusNav {
    border-bottom: 2px solid white;
  }
  .portfolioNav {
    margin-right: auto;
    margin-left: 1rem;
  }
  .navRight {
    margin-right: 1rem;
  }
`;

const Nav = ({ moveToElement }) => {
  const [i, si] = useState(null);
  const navTap = [
    {
      title: "Portfolio",
      className: "portfolioNav",
    },
    {
      title: "Contact",
    },
    {
      title: "About Me",
    },
    {
      title: "Skills",
    },
    {
      title: "Project",
    },
  ];

  const onClickNavName = (index) => {
    moveToElement(index);
    si(index);
  };

  const navClassName = (className, index) => {
    let applyClassName = "navRight";
    if (className) {
      applyClassName = className;
    }
    if (!(i === index) || index === 0) {
      return applyClassName;
    } else {
      return (applyClassName += " focusNav");
    }
  };

  return (
    <NavContainer>
      {navTap.map((tapName, index) => {
        const { title, className } = tapName;
        return (
          <h2
            key={title}
            className={navClassName(className, index)}
            onClick={() => onClickNavName(index)}
          >
            {title}
          </h2>
        );
      })}
    </NavContainer>
  );
};

export default Nav;
