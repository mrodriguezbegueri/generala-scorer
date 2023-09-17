"use client";

import { Box, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { Item } from ".";
import { FC, useContext, useState } from "react";
import { GAME_VALUES } from "@/constants";
import { Player } from "@/interfaces";
import { GameContext } from "@/context";

interface Props {
  player: Player;
  players: Player[];
}

const PlayerColumn: FC<Props> = ({ player, players }) => {
  const {currentPlayer, setNextPlayerToCurrentPlayer, setCurrentPlayer} = useContext(GameContext)
  const [selectedValues, setSelectedValues] = useState(currentPlayer.values);
  const { updateTotalScore } = useContext(GameContext);
  
  const handleChange = (event: SelectChangeEvent, index: number) => {
    const newSelectedValues = [...selectedValues];
    newSelectedValues[index] = event.target.value;
    setSelectedValues(newSelectedValues);

    const totalScore = newSelectedValues.reduce((accumulator, currentValue) => {
      if (currentValue !== "") {
        return accumulator + Number(currentValue)
      }
      return accumulator
    }, 0);
    
    player.values = newSelectedValues
    setCurrentPlayer(player)
    updateTotalScore(player, totalScore)
    setNextPlayerToCurrentPlayer(player)
  };

  return (
    <Grid rowSpacing={2} container item xs={Math.max(9 / players.length)}>
      {Object.keys(GAME_VALUES).map((gameValue, index) => (
        <Grid item xs={12} key={GAME_VALUES[gameValue].label}>
          <Item>
            <Box>
              <FormControl fullWidth>
                <InputLabel id={`${GAME_VALUES[gameValue].label}-${index}`}>{GAME_VALUES[gameValue].label}</InputLabel>
                <Select label={"hola"} value={selectedValues[index]} onChange={(event) => handleChange(event, index)}>
                  {GAME_VALUES[`${index + 1}`]?.values.map((value) => (
                    <MenuItem key={value} value={value}>
                      {" "}
                      {value}{" "}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Item>
        </Grid>
      ))}
      <Grid item xs={12}>
        <Item>
          <Box>
            <Typography> {player.totalScore.toString()} </Typography>
          </Box>
        </Item>
      </Grid>
    </Grid>
  );
};

export default PlayerColumn;
