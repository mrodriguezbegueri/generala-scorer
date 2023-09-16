"use client"

import { Grid } from "@mui/material";
import PlayerColumn from "@/components/PlayerColumn";
import { useContext } from "react";
import { GameContext } from "@/context";
import { Board, Players } from "@/components/ui";

export default function TableScore() {
  const { currentPlayer } = useContext(GameContext);
  return (
    <>
    <Players />
    <div style={{ display: "flex" }}>
      <Grid container spacing={2}>
        <Board />
        <PlayerColumn player={currentPlayer} />
      </Grid>
    </div>
    </>
  );
}