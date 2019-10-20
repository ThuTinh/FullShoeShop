import React from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(them => ({
  btn: {
    backgroundColor: "#F75F00",
    fontSize: "12px",
    marginTop: "20px",
    color: "#fff",
    textTransform: "capitalize"
  }
}));

function ImportStockItem() {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={12} >
          <FormControl style = {{marginBottom:"30px"}}>
            <InputLabel htmlFor="tenSP">Tên sản phẩm</InputLabel>
            <Input id="tenSP" />
          </FormControl>
        </Grid>

        <Grid item md={6}>
          <Grid item>
            <h5>MÀU SẮC: </h5>
          </Grid>
          <Grid item>
            <Grid
              container
              spacing={1}
              direction="column"
              alignItems="flex-start"
            >
              <Grid item>
                <FormControl>
                  <InputLabel htmlFor="mau">Màu</InputLabel>
                  <Input id="mau" />
                </FormControl>
              </Grid>
              <Grid
                container
                spacing={1}
                direction="column"
                alignItems="flex-end"
              ></Grid>
              <Grid item alignItems="flex-end">
                <Button className={classes.btn}>Thêm màu</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={6}>
          <Grid item>
            <h5>SIZE: </h5>
          </Grid>
          <Grid item>
            <Grid
              container
              spacing={1}
              direction="column"
              alignItems="flex-start"
              item
            >
              <Grid item>
                <FormControl>
                  <InputLabel htmlFor="size">SIZE </InputLabel>
                  <Input id="size" />
                </FormControl>
              </Grid>

              <Grid>
                <Button className={classes.btn}>Thêm size</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default ImportStockItem;
