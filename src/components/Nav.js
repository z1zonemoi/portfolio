import styled from "styled-components";
import useMoveElement from "../useMoveElement";

const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  height: 3rem;
  position: fixed;
  top: 0;
  width: 100vw;
  align-items: center;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  z-index: 99;
  > h2 {
    color: black;
    :hover {
      cursor: pointer;
    }
  }
  .focusNav {
    /* background-color: #ecf2ff; */
    color: #bface2;
    /* border-bottom: 2px solid #bface2; */
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
  const { navClassName } = useMoveElement();

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
