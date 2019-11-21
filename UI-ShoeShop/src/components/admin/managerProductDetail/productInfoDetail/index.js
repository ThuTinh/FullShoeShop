import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import ProductItem from "./productItem";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { connect } from "react-redux";
import { atcGetProductsRequest } from "../../../../actions";
import addImg from "../../../../assets/image/upload.png";
import axios from "axios";
import "./style.css";
import { Button, Input } from "@material-ui/core";
function ProductInfoDetail() {
  const [image, setImage] = useState("");
  const [data, setData] = useState(new FormData());
  const [url, setUrl] = useState([]);
  let fileListAvata;
  const onChangeImage = e => {
    const files = Array.from(e.target.files);
    setUrl([]);

    files.forEach(file => {
        data.append('images', file, file.name);
        let reader = new FileReader();
        reader.onload = () => {
            const _url = {
                imagePreviewUrl: reader.result
            };
            let __url = url;
            if (__url.length + 1 < 11) {
                __url.push(_url);
                setUrl([...__url]);
            }
        };

        reader.readAsDataURL(file);
    });

    setData(data);
};
  return (
    <div>
      <div>
        <div style={{ marginBottom: "50px" }}>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="contained"
              color="primary"
              style={{ backgroundColor: "#512c62", marginRight: "10px" }}
            >
              Sửa
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={{ backgroundColor: "#512c62" }}
            >
              Lưu
            </Button>
          </div>
          <h6>PHẦN MÔ TẢ</h6>
          <div
            style={{
              width: "10%",
              height: "4px",
              backgroundColor: "#F75F00",
              marginBottom: "30px"
            }}
          ></div>
          <div style={{ display: "flex" }}>
            <div style={{ width: "100px" }}>Tên Hiển thị : </div>
            {/* <TextField
        id="filled-uncontrolled"
        label="Uncontrolled"
        defaultValue="foo"
        className={classes.textField}
        margin="normal"
        variant="filled"
      /> */}
            <div>
              <input placeholder="Tên hiển thị" />
            </div>
          </div>
          <div
            style={{ marginTop: "20px", marginBottom: "20px", display: "flex" }}
          >
            <div style={{ width: "100px" }}>Giá bán ra:</div>
            <input type="number" />
          </div>
          <div style={{display:'flex'}}>
            <div  style={{ width: "100px" }}>Sale</div>
            <div>
              <input type="number" placeholder="sale.."></input>
            </div>
          </div>
          <div>
            <label>Mô tả:</label>
            <TextareaAutosize
              aria-label="minimum height"
              rows={15}
              placeholder="viết mô tả..."
              style={{ width: "100%" }}
            />
            ;
          </div>
          <div style={{ marginBottom: "20px" }}   onClick={() => fileListAvata.click()}>
            <label>Hình ảnh</label>
            <div>
           
              {url&&url.map((item,index)=> <img src={item.imagePreviewUrl} key={index} className="imgProduct"/>)}
            </div>
          </div>
          {/* <input
            type="file"
            style={{height:'0px'}}
            onChange={e => {
              setImage(e.target.files[0]);
            }}
          /> */}

          <input
            multiple
            ref={e => (fileListAvata = e)}
            type="file"
            className="d-none"
            onChange={onChangeImage}
        />
          <button
            className="outline-button"
            onClick={() => {
           
              axios
                .post(
                  "http://localhost:1337/api/v1/uploads/images/multiple",
                  data,
                  {
                    // receive two    parameter endpoint url ,form data
                  }
                )
                .then(res => {
                  console.log("imageL:", res);
                });
            }}
          >
            upload
          </button>
        </div>
        <h6>THÔNG TIN CHI TIẾT SẢN PHẨM</h6>
        <div
          style={{
            width: "10%",
            height: "4px",
            backgroundColor: "#F75F00",
            marginBottom: "30px"
          }}
        ></div>

        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Loại</TableCell>
              <TableCell>Tên sản phẩm</TableCell>
              <TableCell align="center">Màu sắc</TableCell>
              <TableCell align="center">Size</TableCell>
              <TableCell align="center">Giá bán</TableCell>
              <TableCell align="center">Sl tồn kho</TableCell>
              <TableCell align="center">Sl Nhập về</TableCell>
              <TableCell align="center">Sl bán ra</TableCell>
              <TableCell align="center">Tình trạng</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <ProductItem></ProductItem>
          </TableBody>
        </Table>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginRight: "50px",
            marginTop: "20px",
            width: "100%"
          }}
        >
          <div>
            {" "}
            <h5>Tổng tồn kho: 10000</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
const stateMapToProps = (state, props) => {
  return {
    products: state.products
  };
};
const dispatchMapToProps = (dispatch, props) => {
  return {
    getProducts: () => {
      dispatch(atcGetProductsRequest());
    }
  };
};
export default connect(stateMapToProps, dispatchMapToProps)(ProductInfoDetail);
