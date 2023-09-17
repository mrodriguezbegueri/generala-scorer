"use client";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Player } from "@/interfaces";
import { FC, useState } from "react";
import { Typography } from "@mui/material";
import { useRouter } from "next/navigation";

interface Props {
  winnerPlayer: Player | null;
}

const WinnerDialog: FC<Props> = ({ winnerPlayer }) => {
  const [open, setOpen] = useState(true);

  const router = useRouter();

  const handleClose = () => {
    router.push("/");
    setOpen(false);
  };

  return (
    <div>
      {winnerPlayer !== null ? (
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Felicitaciones!!!</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <Typography variant="h3">El Ganador es {winnerPlayer.name}!!!</Typography>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      ) : (
        <></>
      )}
    </div>
  );
};

export default WinnerDialog;
