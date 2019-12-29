import React,{useState,useEffect} from "react";
import axios from 'axios';
import ReactExport from "react-export-excel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;


function Report() {
  const months = [1, 2, 3, 4, 5,6, 7, 8, 9, 10, 11, 12];

  const RenderMonth = () => {
 
    var result = [];
    result = months.map((item, index) => {
      return <option key={index}>{item}</option>;
    });
    return result;
  };
  const RenderYear = () => {
    var result = [];
    const yearNow = new Date().getFullYear();
    for (let i = 2016; i <= yearNow; i++) {
      let item = <option key={i}>{i}</option>;
      result.push(item);
    }
    return result;
  };
  const [month,setMonth]=useState(1)
  const [year,setYear]=useState(2019)
  const [data,setData]=useState([])
  useEffect( () => {
    axios(
      `http://localhost:1337/api/v1/order-suplier/report?month=${month}&year=${year}`,
    ).then(result=> setData(result.data.payload));
    
   
  },[month,year])
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          justifyItems: "center"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            justifyItems: "center",
            alignItems: "center"
          }}
        >
          <div>Chọn Tháng</div>
          <div>
            <select
            value={month}
            onChange={e=>setMonth(e.target.value)}
              style={{
                padding: "10px 0",
                textAlign: "center",
                marginLeft: "10px"
              }}
            >
              <RenderMonth />
            </select>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            marginLeft: "50px",
            justifyContent: "center",
            justifyItems: "center",
            alignItems: "center"
          }}
        >
          <div>Chọn năm</div>
          <div>
            <select
            value={year}
            onChange={e=>setYear(e.target.value)}
              style={{
                padding: "10px 0",
                textAlign: "center",
                marginLeft: "10px"
              }}
            >
              <RenderYear />
            </select>
          </div>
        </div>

        <div
          style={{
            marginLeft: "40px",
           marginTop:'20px'
          }}
        >

<ExcelFile
          element={
            <button className="outline-button" >Xuất báo cáo</button>
          }
        >
          <ExcelSheet data={data} name="report">
            <ExcelColumn label="name" value="name" />
            <ExcelColumn label="numberProductOrder" value="numberProductOrder" />
            <ExcelColumn label="totalPrice" value='totalPrice' />
          
          </ExcelSheet>
        </ExcelFile>
         
        </div>
      </div>
    </div>
  );
}

export default Report;
