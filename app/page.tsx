"use client";

import { Grid, Typography } from "@mui/material";
import { Item } from "@/components";
import PlayerColumn from "@/components/PlayerColumn";
import { useContext } from "react";
import { GameContext } from "@/context";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

export default function Home() {
  const { players } = useContext(GameContext);

  return (
    <div style={{ display: "flex" }}>
      <Grid container spacing={2}>
        <Grid rowSpacing={2} container item xs={2}>
          <Grid item xs={12}>
            <Item sx={{ alignItems: 'center' }}>
              <PeopleAltIcon />
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item>1</Item>
          </Grid>
          <Grid item xs={12}>
            <Item>2</Item>
          </Grid>
          <Grid item xs={12}>
            <Item>3</Item>
          </Grid>
          <Grid item xs={12}>
            <Item>4</Item>
          </Grid>
          <Grid item xs={12}>
            <Item>5</Item>
          </Grid>
          <Grid item xs={12}>
            <Item>6</Item>
          </Grid>
          <Grid item xs={12}>
            <Item>Escalera</Item>
          </Grid>
          <Grid item xs={12}>
            <Item>Full</Item>
          </Grid>
          <Grid item xs={12}>
            <Item>Poker</Item>
          </Grid>
          <Grid item xs={12}>
            <Item>Generala</Item>
          </Grid>
          <Grid item xs={12}>
            <Item>Doble</Item>
          </Grid>
          <Grid item xs={12}>
            <Item>Total</Item>
          </Grid>
        </Grid>

        {players.map((player) => (
          <PlayerColumn player={player} countPlayers={players.length} key={player.name} />
        ))}
      </Grid>
    </div>
  );
}
