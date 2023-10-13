"use client";

import { GameContext } from "@/context";
import { Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { Item } from "..";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import styles from "./players.module.css";
import { isCurrentPlayer } from "@/util";

const Players = () => {
  const { players, currentPlayer } = useContext(GameContext);

  return (
    <div style={{ position: "sticky", top: "1rem", zIndex: 999 }}>
      <Grid container justifyContent="center" spacing={2} sx={{ marginBottom: "20px" }}>
        <Grid item xs={3}>
          <Item sx={{ alignItems: "center" }}>
            <PeopleAltIcon />
          </Item>
        </Grid>
        {players.map((player) => (
          <Grid item key={player.name} xs={Math.max(9 / players.length)} justifyContent="center">
            <Item className={isCurrentPlayer(currentPlayer, player) ? styles.currentPlayer : ""}>
              <Typography>{player.name}</Typography>
            </Item>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Players;
