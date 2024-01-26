"use client";

import { Paper, styled } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1.5),
  textAlign: "center",
  justifyContent:"center",
  color: theme.palette.text.secondary,
  height: "100%",
  width: "100%",
  overflow: "hidden",
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(0.5)
  },
}));

export default Item;
