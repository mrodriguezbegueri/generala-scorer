"use client";

import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import { Grid, Typography } from "@mui/material";
import { GAME_VALUES } from "@/constants";

export interface Props {
  index: number;
  open: boolean;
  options: number[];
  playerName: string;
  close: (index: number, valueSelected: number | undefined) => void;
}

export default function SelectScore({ open, options, close, index, playerName }: Props) {
  const onClose = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, value?: number) => {
    let valueSelected = undefined
    event.stopPropagation();
    

    if (value !== undefined) {
        valueSelected = value
    }

    close(index, valueSelected);
  };

  return (
    <Dialog maxWidth="xs" open={open}>
      <DialogTitle>Indicar puntaje de {playerName} para {GAME_VALUES[index + 1].label}</DialogTitle>
      <DialogContent dividers>
        {options.map((option) => (
          <Grid container key={option}>
            <Grid item xs={12} display={"flex"} justifyContent="center">
              <Button fullWidth onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => onClose(e, option)}>
                <Typography variant="h5">{option}</Typography>
              </Button>
            </Grid>
          </Grid>
        ))}
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={onClose}>
          Cancelar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
