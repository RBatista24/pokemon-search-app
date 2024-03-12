import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Item = ({ name }) => (
  <Container>
    <Link to={`/pokemon/${name}`}>{name}</Link>
  </Container>
);

const Container = styled.li`
  margin: 4px 0;
  text-transform: capitalize;
`;

export default Item;