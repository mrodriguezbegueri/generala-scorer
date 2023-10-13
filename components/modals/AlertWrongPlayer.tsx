"use client"
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface Props {
  close: (status: boolean) => void
}
export default function AlertDialog({ close }: Props) {
  return (
    <div>
      <Dialog
        open={true}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Jugador Incorrecto!!!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            No es el turno de este Jugador, ¿Deseas modificar un puntaje?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => close(false)} autoFocus>
            Salir
          </Button>
          <Button onClick={() => close(true)}>Continuar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
