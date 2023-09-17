"use client";

import { GameContext } from "@/context";
import { Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { Item } from "..";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { Player } from "@/interfaces";

import styles from "./players.module.css";

const Players = () => {
  const { players, setCurrentPlayer, currentPlayer } = useContext(GameContext);

  const handleOnClickPlayer = (player: Player) => {
    setCurrentPlayer(player);
  };

  const isCurrentPlayer = (player: Player): boolean => {
    return currentPlayer.name === player.name;
  };

  return (
    <div style={{ position: 'sticky',  top: "1rem", zIndex: 999 }}>
      <Grid container justifyContent="center" spacing={2} sx={{ marginBottom: "20px" }}>
        <Grid item xs={2} >
          <Item sx={{ alignItems: "center" }}>
            <PeopleAltIcon />
          </Item>
        </Grid>
        <Grid item xs={1}></Grid>
        {players.map((player) => (
          <Grid item key={player.name} xs={Math.max(9 / players.length)} justifyContent="center">
            <Item
              className={isCurrentPlayer(player) ? styles.currentPlayer : ""}
              onClick={() => handleOnClickPlayer(player)}
            >
              <Typography>{player.name}</Typography>
            </Item>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Players;
