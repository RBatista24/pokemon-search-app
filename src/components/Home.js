import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import List from "./List";
import Pagination from "./Pagination";

const Home = () => {
  const { page: initialPage } = useParams();
  const [currentPage, setCurrentPage] = useState(
    initialPage ? parseInt(initialPage) : 1
  );
  const [query, setQuery] = useState("");
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  const ITEMS_PER_PAGE = 10;

  useEffect(() => {
    if (initialPage) setCurrentPage(parseInt(initialPage));
  }, [initialPage]);

  useEffect(() => {
    const getItems = async () => {
      const {
        data: { results, count },
      } = await axios.get(
        `?limit=${ITEMS_PER_PAGE}&offset=${(currentPage - 1) * ITEMS_PER_PAGE}`
      );
      setItems(results);
      setTotal(count);
    };
    getItems();
  }, [currentPage]);

  return (
    <Container>
      <SearchContainer>
        <Input
          type="text"
          name="search"
          id="search"
          value={query}
          onChange={({ target }) => setQuery(target.value)}
        />
        <Link to={`/pokemon/${query}`}>
          <Button>Search</Button>
        </Link>
      </SearchContainer>
      <List items={items}></List>
      {total ? (
        <Pagination
          currentPage={currentPage}
          total={Math.ceil(total / ITEMS_PER_PAGE)}
        />
      ) : (
        <p>loading...</p>
      )}
    </Container>
  );
};

const Container = styled.section`
  max-width: 600px;
  margin: 0 auto;
  flex: 1;
`;

const SearchContainer = styled.section`
  display: flex;
  gap: 8px;
  align-items: center;
`;
const Input = styled.input`
  padding: 7px;
  border-radius: 2px;
  border: 1px solid #333;
  min-width: 0;
  flex: 1;
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

export default Home;
