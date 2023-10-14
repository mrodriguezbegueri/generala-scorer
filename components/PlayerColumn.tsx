"use client";

import { Box, FormControl, Grid, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { Item } from ".";
import { FC, useContext, useState } from "react";
import { GAME_VALUES } from "@/constants";
import { Player } from "@/interfaces";
import { GameContext } from "@/context";
import { isCurrentPlayer } from "@/util";

import styles from './playerColumn.module.css'
import { AlertWrongPlayer, SelectScore } from "./modals";

interface Props {
  player: Player;
  players: Player[];
}

let resolver: any

const PlayerColumn: FC<Props> = ({ player, players }) => {
  
  const [showDialog, setShowDialog] = useState(false)
  const [showScoreDialog, setShowScoreDialog] = useState(Array(Object.keys(GAME_VALUES).length).fill(false))
  const {currentPlayer, setNextPlayerToCurrentPlayer} = useContext(GameContext)
  const [selectedValues, setSelectedValues] = useState(currentPlayer.values);
  const { updateTotalScore } = useContext(GameContext);
  
  const openScoreDialog = (index: number): void => {
    const updatedArray = [...showScoreDialog];
    updatedArray[index] = true;
    setShowScoreDialog(updatedArray)
  }

  const closeScoreDialog = (index: number): void => {
    const updatedArray = [...showScoreDialog];
    updatedArray[index] = false;
    setShowScoreDialog(updatedArray)
  }

  const onClose = (status: boolean) => {
    setShowDialog(false)
    resolver(status)
  }

  const openDialog = () => {
    setShowDialog(true)
    return new Promise((res, rej) => {
      resolver = res
    })
  }
  
  // const handleChange = async (event: SelectChangeEvent, index: number) => {
  //   if (!isCurrentPlayer(currentPlayer, player)) {
  //     const userContinue = await openDialog()
      
  //     if (userContinue === false) {
  //       return
  //     }
  //   } else {
  //     setNextPlayerToCurrentPlayer(player)
  //   }


  //   const newSelectedValues = [...selectedValues];
  //   newSelectedValues[index] = event.target.value;
  //   setSelectedValues(newSelectedValues);

  //   const totalScore = newSelectedValues.reduce((accumulator, currentValue) => {
  //     if (currentValue !== "") {
  //       return accumulator + Number(currentValue)
  //     }
  //     return accumulator
  //   }, 0);
    
  //   player.values = newSelectedValues
  //   updateTotalScore(player, totalScore)
  // };

  return (
    <>
    <Grid rowSpacing={2} container item xs={Math.max(9 / players.length)}>
      {Object.keys(GAME_VALUES).map((gameValue, index) => (
        <Grid item xs={12} key={GAME_VALUES[gameValue].label}>
          <Item onClick={() => openScoreDialog(index)} sx={{ cursor: 'pointer' }} className={ selectedValues[index] !== '' ? styles['score-annotated'] : '' }>
            <Box>
            <Typography>-</Typography>
            <SelectScore playerName={player.name} index={index} close={closeScoreDialog} open={showScoreDialog[index]} options={GAME_VALUES[index + 1].values} />
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
    { showDialog && <AlertWrongPlayer close={onClose} /> }
    </>
  );
};

export default PlayerColumn;
