"use client";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Player } from "@/interfaces";
import { FC, useContext, useEffect, useState } from "react";
import { Button, DialogActions, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { createNewPlayers } from "@/util";
import { GameContext } from "@/context";

interface Props {
  winnerPlayer: Player | null;
  playSounds: () => void;
}


const WinnerDialog: FC<Props> = ({ winnerPlayer, playSounds }) => {
  const [open, setOpen] = useState(true);
  const { players, setCurrentPlayer, setPlayers } = useContext(GameContext)

  const router = useRouter();

  const handleClose = (): void => {
    router.push("/");
    setOpen(false);
  };

  const winnerCondition = (name: string) => name === winnerPlayer?.name;

  const restartGame = (): void => {
    if (winnerPlayer === null) {
      return
    }

    const playersNames = players.map(player => player.name)
    playersNames.sort((a, b) => {
      if (winnerCondition(a) && !winnerCondition(b)) {
        return -1;
      } else if (!winnerCondition(a) && winnerCondition(b)) {
        return 1;
      } else {
        return 0;
      }
    });
    const resetPlayers = createNewPlayers(playersNames) 
    setCurrentPlayer(resetPlayers[0])
    setPlayers(resetPlayers)
    router.push('/generala')
    setOpen(false)
  }

  useEffect(() => {
    playSounds();
  }, []);

  return (
    <div>
      {winnerPlayer !== null ? (
        <Dialog open={open}>
          <DialogTitle sx={{ display: 'flex', justifyContent: 'center' }}> <Typography variant="h3">Felicitaciones!!!</Typography></DialogTitle>
          <DialogContent>
            <DialogContentText sx={{ display: 'flex', justifyContent: 'center' }}>
              <Typography variant="h4">El Ganador es {winnerPlayer.name}!!!</Typography>
            </DialogContentText>
          </DialogContent>
          <DialogActions sx={{ justifyContent: 'center' }}>
            <Button onClick={handleClose}>Cancelar</Button>
            <Button onClick={restartGame}>Revancha</Button>
          </DialogActions>
        </Dialog>
      ) : (
        <></>
      )}
    </div>
  );
};

export default WinnerDialog;
