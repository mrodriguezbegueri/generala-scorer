"use client";

import { FC, useContext, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Item } from ".";
import { GAME_VALUES } from "@/constants";
import { Player } from "@/interfaces";
import { GameContext } from "@/context";
import { isCurrentPlayer } from "@/util";
import { AlertWrongPlayer, SelectScore } from "./modals";

import styles from './playerColumn.module.css'
interface Props {
  player: Player;
  players: Player[];
}

let resolver: any

const PlayerColumn: FC<Props> = ({ player, players }) => {
  
  const [showDialog, setShowDialog] = useState(false)
  const [showScoreDialog, setShowScoreDialog] = useState(Array(Object.keys(GAME_VALUES).length).fill(false))
  const {currentPlayer, setNextPlayerToCurrentPlayer} = useContext(GameContext)
  const { updateTotalScore } = useContext(GameContext);
  
  const openScoreDialog = async (index: number): Promise<void> => {

    if (!isCurrentPlayer(currentPlayer, player)) {
      const userContinue = await openDialog()
      
      if (userContinue === false) {
        return
      }
    }


    const updatedArray = [...showScoreDialog];
    updatedArray[index] = true;
    setShowScoreDialog(updatedArray)
  }

  const closeScoreDialog = (index: number, valueSelected: number | undefined): void => {
    const updatedArray = [...showScoreDialog];
    updatedArray[index] = false;
    setShowScoreDialog(updatedArray)
    handleChange(valueSelected, index)
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
  
  const handleChange = async (value: number | undefined, index: number) => {

    if (value === undefined) {
      return
    }

    player.values[index] = value.toString()

    const totalScore = player.values.reduce((accumulator, currentValue) => {
      if (currentValue !== "") {
        return accumulator + Number(currentValue)
      }
      return accumulator
    }, 0);
    
    updateTotalScore(player, totalScore)
    setNextPlayerToCurrentPlayer(player)
  };

  return (
    <>
    <Grid rowSpacing={2} container item xs={Math.max(9 / players.length)}>
      {Object.keys(GAME_VALUES).map((gameValue, index) => (
        <Grid item xs={12} key={GAME_VALUES[gameValue].label}>
          <Item onClick={() => openScoreDialog(index)} sx={{ cursor: 'pointer' }} className={ player.values[index] !== '' ? styles['score-annotated'] : '' }>
            <Box>
            <Typography>{player.values[index] !== '' ? player.values[index] : '-'}</Typography>
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
