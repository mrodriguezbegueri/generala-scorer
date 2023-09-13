import { Grid } from "@mui/material";
import { Item } from "..";

export const Board = () => {
  return (
    <Grid rowSpacing={2} container item xs={4}>
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
  );
};
