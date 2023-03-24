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
  return (
    <NavContainer>
      <h2 className="portfolioNav" onClick={() => moveToElement(0)}>
        Portfolio
      </h2>
      <h2 className="navRight" onClick={() => moveToElement(1)}>
        Contact
      </h2>
      <h2 className="navRight" onClick={() => moveToElement(2)}>
        About ME
      </h2>
      <h2 className="navRight" onClick={() => moveToElement(3)}>
        Skills
      </h2>
      <h2 className="navRight" onClick={() => moveToElement(4)}>
        Project
      </h2>
    </NavContainer>
  );
};

export default Nav;
