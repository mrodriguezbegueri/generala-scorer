"use client";

import { Grid } from "@mui/material";
import PlayerColumn from "@/components/PlayerColumn";
import { useContext, useEffect } from "react";
import { GameContext } from "@/context";
import { Board, Players } from "@/components/ui";
import { useRouter } from "next/navigation";

export default function TableScore() {
  const { currentPlayer } = useContext(GameContext);
  const router = useRouter();

  useEffect(() => {
    if (currentPlayer.name == "default") {
      router.push("/");
    }
  }, [currentPlayer])
  

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
