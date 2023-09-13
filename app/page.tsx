"use client";

import { Grid } from "@mui/material";
import PlayerColumn from "@/components/PlayerColumn";
import { useContext } from "react";
import { GameContext } from "@/context";
import { Board } from "@/components/ui";

export default function Home() {
  const { players, currentPlayer } = useContext(GameContext);

  return (
    <div style={{ display: "flex" }}>
      <Grid container spacing={2}>
        <Board />
        <PlayerColumn player={currentPlayer} countPlayers={players.length} />
      </Grid>
    </div>
  );
}
