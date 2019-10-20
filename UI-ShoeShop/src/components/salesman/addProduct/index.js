import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";
import Input from "@material-ui/core/Input";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

const useStyles = makeStyles(theme => ({
  kind: {
    display: "flex"
  },
  item: {
    marginTop: "30px",
    marginBottom: "30px"
  },
  infoProduct: {
    marginTop: "30px",
    marginBottom: "200px"
  },
  infoPublic: {
    marginTop: "50px"
  }
}));
function AddProduct() {
  const classes = useStyles();
  return (
    <div style={{ width: "100%" }}>
      <div className={classes.kind}>
        <div>
          <h6>Phân loại hàng</h6>
        </div>
        <div className={classes.item}>
          <FormControl>
            <InputLabel htmlFor="age-customized-native-simple">Age</InputLabel>
            <NativeSelect
              value="A"
              input={<InputBase name="age" id="age-customized-native-simple" />}
            >
              <option value="" />
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </NativeSelect>
          </FormControl>
        </div>
        <div className={classes.item}>
          <FormControl>
            <InputLabel htmlFor="kind">Age</InputLabel>
            <NativeSelect value="A" input={<InputBase name="age" id="kind" />}>
              <option value="" />
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </NativeSelect>
          </FormControl>
        </div>
      </div>
      <div className={classes.infoProduct}>
        <div>
          <h6>Tên sản phẩm trong kho</h6>
          <FormControl>
            <InputLabel htmlFor="info-product">Mã - tên sản phẩm</InputLabel>
            <NativeSelect
              value="A"
              input={<InputBase name="age" id="info-product" />}
            >
              <option value="" />
              <option value={10}>120-Giày hạnh</option>
              <option value={20}>111-Giày convert</option>
              <option value={30}>190-Giày cao got</option>
            </NativeSelect>
          </FormControl>
        </div>
        <div className={classes.infoPublic}>
          <div>
            <h6>Phần thông tin public</h6>
          </div>
          <div>
            <div>
              <FormControl>
                <InputLabel htmlFor="name-product">Tên sản phẩm</InputLabel>
                <Input id="name-product" />
              </FormControl>
            </div>
            <div>
              <FormControl>
                <InputLabel htmlFor="price">Giá</InputLabel>
                <Input id="price" />
              </FormControl>
            </div>
            <div>
              {" "}
              <FormControl>
                <InputLabel htmlFor="sale">Sale</InputLabel>
                <Input id="sale" />
              </FormControl>
            </div>

            <h6 style = {{marginTop:'30px'}}>Mô tả</h6>
            <TextareaAutosize
              aria-label="Mô tả"
              rows={10}
              placeholder="Nhập mô tả sản phẩm"
              style = {{width: '100%', marginBottom: '30px'}}
            />
          </div>
          <Button variant="contained" color="secondary">
            {" "}
            Lưu
          </Button>
        </div>
      </div>
    </div>
  );
}
export default AddProduct;
