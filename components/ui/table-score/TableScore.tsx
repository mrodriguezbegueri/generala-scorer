"use client";

import { Grid } from "@mui/material";
import PlayerColumn from "@/components/PlayerColumn";
import { useContext, useEffect, useState } from "react";
import { GameContext } from "@/context";
import { Board, Players } from "@/components/ui";
import { useRouter } from "next/navigation";
import { AlertWrongPlayer } from "@/components/modals";


export default function TableScore() {
  const [showDialog, setShowDialog] = useState(false)
  const { currentPlayer, players } = useContext(GameContext);
  const router = useRouter();

  const openDialog = (): void => {
    setShowDialog(true);
  };

  const closeDialog = (): void => {
    setShowDialog(false);
  };

  useEffect(() => {
    if (currentPlayer.name == "default") {
      router.push("/");
    }
  }, [currentPlayer]);

  return (
    <>
      <Players />
      <div style={{ display: "flex" }}>
        <Grid container spacing={2} justifyContent="center">
          <Board />
          <Grid item xs={1}></Grid>
          {players.map((player) => (
            <PlayerColumn key={player.name} player={player} players={players} openDialog={openDialog} />
            ))}
        </Grid>
      </div>
      <AlertWrongPlayer open={showDialog} close={closeDialog} />
      </>
  );
}
