import React from "react";

import Box from "@mui/material/Box";

import { Grid } from "@mui/material";
import { UserCard } from "components/UserCard";

export const CharacterListContainer = ({
  onScroll,
  listInnerRef,
  userList,
}) => {
  return (
    <Box
      onScroll={onScroll}
      ref={listInnerRef}
      style={{ height: "100vh", overflowY: "auto" }}
    >
      <Grid container padding={"40px"} maxWidth={"1100px"} margin={"0 auto"}>
        {userList.map((item) => {
          return <UserCard key={item.id} item={item} />;
        })}
      </Grid>
    </Box>
  );
};
