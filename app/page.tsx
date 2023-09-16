"use client";

import { GameContext } from "@/context";
import { createNewPlayers } from "@/util";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useRouter } from "next/navigation";
import { ChangeEvent, useContext, useEffect, useState } from "react";

const Home = () => {
  const router = useRouter()

  const [open, setOpen] = useState(true);
  const [cantPlayers, setCantPlayers] = useState(''); 
  const [arrayPlayers, setArrayPlayers] = useState([] as Array<string>); 
  const { setPlayers, setCurrentPlayer } = useContext(GameContext)

  const [nameValues, setNameValuers] = useState([] as Array<string>);

  const handleTextFieldsChanges = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
    const newNameValues = [...nameValues];
    newNameValues[index] = event.target.value;
    setNameValuers(newNameValues);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setCantPlayers(event.target.value);
  };

  const handleClose = () => {
    const players = createNewPlayers(nameValues)
    setCurrentPlayer(players[0])
    setPlayers(players)
    router.push('/generala')
    setOpen(false);
  };

  useEffect(() => {
    setArrayPlayers(Array(Number(cantPlayers)).fill(""))

  }, [cantPlayers])
  

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Jugadores</DialogTitle>
        <DialogContent>
          <DialogContentText>Ingresa el número de jugadores</DialogContentText>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Jugadores</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={cantPlayers}
              label="Players"
              onChange={handleChange}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
            </Select>

            {
              arrayPlayers.map((player, index) => (
                <TextField key={`player-${player}-index-${index}`} id="outlined-basic" label={`Jugador ${index + 1}`} variant="outlined" 
                onChange={(event) => handleTextFieldsChanges(event, index)}/>
              ))
            }

          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleClose}>Jugar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Home;
