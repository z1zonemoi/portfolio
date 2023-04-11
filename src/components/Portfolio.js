import React from "react";
import styled from "styled-components";

const Portfolio = () => {
  return (
    <PortfolioContainer>
      <h2>coming soon</h2>
    </PortfolioContainer>
  );
};

export default Portfolio;

const PortfolioContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  > h2 {
    font-size: 3rem;
  }
`;
