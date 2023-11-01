import React, { useRef, useEffect } from "react";
import { CharacterListContainer } from "components/ListContainer";
import { Box } from "@mui/material";
import throttle from "lodash/throttle";
import { useCharacterContext } from "context/CharacterContext";

const ListingPageComponent = () => {
  const listInnerRef = useRef();

  const { currPage, setCurrPage, userList, prevPage, fetchCharacters } =
    useCharacterContext();

  useEffect(() => {
    if (prevPage !== currPage) {
      fetchCharacters();
    }
  }, [currPage, prevPage, userList]);

  const onScrollThrottled = throttle(() => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;

      if (scrollTop + clientHeight + 100 >= scrollHeight) {
        setCurrPage(currPage + 1);
      }
    }
  }, 500);
  useEffect(() => {
    if (listInnerRef.current) {
      listInnerRef.current.addEventListener("scroll", onScrollThrottled);
    }

    return () => {
      if (listInnerRef.current) {
        listInnerRef.current.removeEventListener("scroll", onScrollThrottled);
      }
    };
  }, [onScrollThrottled, listInnerRef.current]);

  return (
    <Box style={{ marginBottom: "30px" }}>
      <CharacterListContainer
        onScroll={onScrollThrottled}
        listInnerRef={listInnerRef}
        userList={userList}
      />
    </Box>
  );
};

export default ListingPageComponent;
