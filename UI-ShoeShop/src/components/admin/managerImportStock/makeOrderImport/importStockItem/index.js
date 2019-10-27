import React from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import { Grid, makeStyles } from "@material-ui/core";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const useStyles = makeStyles(them => ({
  deleteIcon:{
    color:"#512C62",
    "&:hover":{
      color: 'red',
      cursor: 'pointer'
    }
  }

}));

function ImportStockItem() {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={12}>
          <div style={{ marginBottom: "30px" }}>
            <label style={{ fontSize: "15px", marginRight: "20px" }}>
              Tên Sản phẩm:{" "}
            </label>
            <select style={{ width: "200px", height: "40px" }}>
              <option>SP1</option>
              <option>SP 2</option>
              <option>Sp3</option>
              <option>Sp 4</option>
            </select>
          </div>
        </Grid>

        <Grid item md={6}>
          <Grid item>
            <h6>MÀU SẮC: </h6>
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
                <Button
                  variant="contained"
                  color="primary"
                  style={{ backgroundColor: "#512c62", fontSize: "11px", marginTop: '10px' }}
                >
                  Thêm màu
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={6}>
          <Grid item>
            <div style = {{display: 'flex', justifyContent: 'space-between', width: '50%'}}>
            <h6>SIZE: </h6> 
            <div><HighlightOffIcon className = {classes.deleteIcon}></HighlightOffIcon></div>
            </div>
           
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
                  <InputLabel htmlFor="size">Size </InputLabel>
                  <Input id="size" />
                </FormControl>
              </Grid>

              <Grid>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ backgroundColor: "#512c62", fontSize: "11px",  marginTop: '10px'  }}
                >
                  Thêm size
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default ImportStockItem;
