import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Pagination = ({ currentPage, total }) => {
  return (
    <Container id="pagination">
      {currentPage - 1 ? (
        <Link to={`/${currentPage - 1}`} id="previous">
          <Button>prev</Button>
        </Link>
      ) : null}
      <span>
        Page {currentPage} of {total}
      </span>
      {currentPage < total ? (
        <Link to={`/${currentPage + 1}`} id="next">
          <Button>Next</Button>
        </Link>
      ) : null}
    </Container>
  );
};

const Container = styled.div`
  padding: 16px 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
const Button = styled.button`
  background-color: yellow;
  color: black;
  border: 0;
  padding: 8px 16px;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background-color: #33b;
  }
`;

export default Pagination;