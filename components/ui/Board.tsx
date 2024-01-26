"use client";
import { Grid, Typography } from "@mui/material";
import { Textfit } from "react-textfit";
import { Item } from "..";


export const Board = () => {
  return (
    <Grid wrap="wrap" rowSpacing={2} container item xs={3}>
      <Grid item xs={12}>
        
          <Textfit  mode="single">
          <Item>
            <Typography>1</Typography>
        </Item>
          </Textfit>
      </Grid>
      <Grid item xs={12}>
        <Item>
          <Textfit  mode="single">
            <Typography>2</Typography>
          </Textfit>
        </Item>
      </Grid>
      <Grid item xs={12}>
        <Item>
          <Textfit  mode="single">
            <Typography>3</Typography>
          </Textfit>
        </Item>
      </Grid>
      <Grid item xs={12}>
        <Item>
          <Textfit  mode="single">
            <Typography>4</Typography>
          </Textfit>
        </Item>
      </Grid>
      <Grid item xs={12}>
        <Item>
          <Textfit  mode="single">
            <Typography>5</Typography>
          </Textfit>
        </Item>
      </Grid>
      <Grid item xs={12}>
        <Item>
          <Textfit  mode="single">
            <Typography>6</Typography>
          </Textfit>
        </Item>
      </Grid>
      <Grid item xs={12}>
        <Item>
          <Textfit  mode="single">
            <Typography>Escalera</Typography>
          </Textfit>
        </Item>
      </Grid>
      <Grid item xs={12}>
        <Item>
          <Textfit  mode="single">
            <Typography>Full</Typography>
          </Textfit>
        </Item>
      </Grid>
      <Grid item xs={12}>
        <Item>
          <Textfit  mode="single">
            <Typography>Poker</Typography>
          </Textfit>
        </Item>
      </Grid>
      <Grid item xs={12}>
        <Item>
          <Textfit  mode="single">
            <Typography>Generala</Typography>
          </Textfit>
        </Item>
      </Grid>
      <Grid item xs={12}>
        <Item>
          <Textfit  mode="single">
            <Typography>Doble</Typography>
          </Textfit>
        </Item>
      </Grid>
      <Grid item xs={12}>
        <Item>
          <Textfit  mode="single">
            <Typography>Total</Typography>
          </Textfit>
        </Item>
      </Grid>
    </Grid>
  );
};
