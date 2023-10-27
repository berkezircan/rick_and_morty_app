import React, { useRef, useEffect, useState } from "react";

import axios from "axios";
import { CharacterListContainer } from "components/ListContainer";

const ListingPageComponent = () => {
  const listInnerRef = useRef();
  const [currPage, setCurrPage] = useState(1);
  const [prevPage, setPrevPage] = useState(0);
  const [userList, setUserList] = useState([]);
  const [lastList, setLastList] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/?page=${currPage}`
      );

      setPrevPage(currPage);
      setUserList([...userList, ...response.data.results]);
    };
    if (!lastList && prevPage !== currPage) {
      fetchData();
    }
  }, [currPage, lastList, prevPage, userList]);

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight + 10 > scrollHeight) {
        setCurrPage(currPage + 1);
      }
    }
  };

  return (
    <div>
      <CharacterListContainer
        style={{ marginBottom: "10px" }}
        onScroll={onScroll}
        listInnerRef={listInnerRef}
        userList={userList}
      />
    </div>
  );
};

export default ListingPageComponent;
