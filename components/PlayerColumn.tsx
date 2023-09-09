import { Box, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { Item } from ".";
import { FC, useState } from "react";
import { GAME_VALUES } from "@/constants";

interface Props {
  players: number[];
}

const PlayerColumn: FC<Props> = ({ players }) => {
  const [selectedValues, setSelectedValues] = useState(Array(Object.keys(GAME_VALUES).length).fill('')); // Inicializa un array de valores seleccionados
  
  const handleChange = (event: SelectChangeEvent, index: number) => {
    const newSelectedValues = [...selectedValues];
    newSelectedValues[index] = event.target.value;
    setSelectedValues(newSelectedValues);
  }
  return (
    <Grid rowSpacing={2} container item xs={Math.floor(10 / players.length)}>
      {Object.keys(GAME_VALUES).map((gameValue, index) => (
        <Grid item xs={12} key={GAME_VALUES[gameValue].label + index}>
          <Item>
            <Box>
              <FormControl fullWidth>
                <InputLabel id={`${GAME_VALUES[gameValue].label}-${index}`}></InputLabel>
                <Select
                  label={"hola"}
                  value={selectedValues[index]}
                  onChange={(event) => handleChange(event, index)}
                >

                  {
                    GAME_VALUES[`${index+1}`]?.values.map((value) => (
                      <MenuItem key={value} value={value}> {value} </MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
            </Box>
          </Item>
        </Grid>
      ))}
    </Grid>
  );
};

export default PlayerColumn;
