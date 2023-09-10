"use client";

import { GameContext } from "@/context";
import { Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { Item } from "..";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { Player } from "@/interfaces";

const Players = () => {
  const { players, setCurrentPlayer, currentPlayer } = useContext(GameContext);

    const handleOnClickPlayer = (player: Player) => {
        setCurrentPlayer(player)
    }

  return (
    <Grid container spacing={2} sx={{ marginBottom: "20px" }}>
      <Grid rowSpacing={2} container item xs={2}>
        <Grid item xs={12}>
          <Item sx={{ alignItems: "center" }}>
            <PeopleAltIcon />
          </Item>
        </Grid>
      </Grid>
      {players.map((player) => (
        <Grid rowSpacing={2} container item xs={Math.floor(10 / players.length)} key={player.name}>
          <Grid item xs={12}>
              <Item onClick={() => handleOnClickPlayer(player)}>
                <Typography>{player.name}</Typography>
              </Item>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default Players;
