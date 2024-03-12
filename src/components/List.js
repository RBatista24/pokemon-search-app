import React from "react";
import styled from "styled-components";
import Item from "./Item";

const List = ({ items }) => (
  <Container>
    {items.map((item) => (
      <Item key={item.name} name={item.name} />
    ))}
  </Container>
);

const Container = styled.ul`
  margin: 16px 0;
`;

export default List;