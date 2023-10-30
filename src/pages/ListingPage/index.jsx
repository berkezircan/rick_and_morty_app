import React, { useRef, useEffect, useState } from "react";
import { CharacterListContainer } from "components/ListContainer";
import { Box } from "@mui/material";
import throttle from "lodash/throttle";

const ListingPageComponent = () => {
  const listInnerRef = useRef();
  const [currPage, setCurrPage] = useState(1);
  const [prevPage, setPrevPage] = useState(0);
  const [userList, setUserList] = useState([]);
  // const [accumulator, setAccumulator] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${currPage}`
      );

      const { results, info } = await response.json();

      setPrevPage(currPage);

      if (currPage === info.pages) {
        return;
      }

      setUserList([...userList, ...results]);
    };

    if (prevPage !== currPage) {
      fetchData();
    }
  }, [currPage, prevPage, userList]);

  const onScrollThrottled = throttle(() => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;

      if (scrollTop + clientHeight + 10 >= scrollHeight) {
        setCurrPage(currPage + 1);
      }
    }
  }, 200);

  useEffect(() => {
    listInnerRef.current.addEventListener("scroll", onScrollThrottled);

    return () => {
      listInnerRef.current.removeEventListener("scroll", onScrollThrottled);
    };
  }, [onScrollThrottled, listInnerRef.current]);

  console.log(userList.length);

  return (
    <Box style={{ marginBottom: "30px" }}>
      <CharacterListContainer
        onScroll={onScrollThrottled} // Use the throttled function
        listInnerRef={listInnerRef}
        userList={userList}
      />
    </Box>
  );
};

export default ListingPageComponent;
