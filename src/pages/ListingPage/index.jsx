import React, { useRef, useEffect, useState } from "react";

import axios from "axios";
import { CharacterListContainer } from "components/ListContainer";
import { Box } from "@mui/material";

const ListingPageComponent = () => {
  const listInnerRef = useRef();
  const [currPage, setCurrPage] = useState(1);
  const [prevPage, setPrevPage] = useState(0);
  const [userList, setUserList] = useState([]);
  const [accumulator, setAccumulator] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/?page=${currPage}`
      );

      setPrevPage(currPage);
      setUserList([...userList, ...response.data.results]);
    };

    if (prevPage !== currPage) {
      fetchData();
    }
  }, [currPage, prevPage, userList]);

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;

      if (scrollTop + clientHeight + accumulator >= scrollHeight) {
        setCurrPage(currPage + 1);

        accumulator < 2 && setAccumulator(1 + currPage * 0.01);
      }
    }
  };

  return (
    <Box style={{ marginBottom: "30px" }}>
      <CharacterListContainer
        onScroll={onScroll}
        listInnerRef={listInnerRef}
        userList={userList}
      />
    </Box>
  );
};

export default ListingPageComponent;
