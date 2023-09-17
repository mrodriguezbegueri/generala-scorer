"use client";

import { Paper, styled } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  justifyContent:"center",
  color: theme.palette.text.secondary,
  height: "100px",
  overflowWrap: "break-word",
  textOverflow: "ellipsis"
}));

export default Item;
