"use client"
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface Props {
    open: boolean
    close: () => void
}

export default function AlertDialog({ open, close }: Props) {
    
  return (
    <div>
      <Dialog
        open={open}
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
          <Button onClick={() => close()}>Continuar</Button>
          <Button onClick={() => close()} autoFocus>
            Salir
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
