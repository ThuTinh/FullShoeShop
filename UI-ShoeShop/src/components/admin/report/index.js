import React,{useState} from "react";
import axios from 'axios';
function Report() {
  const months = [1, 2, 3, 4, 56, 7, 8, 9, 10, 11, 12];

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
          <button className="outline-button" onClick={async () => {
    const result = await axios(
      `http://localhost:1337/api/v1/order-suplier/report?month=${month}&year=${year}`,
    );
    console.log(result.data)
    setData(result.data);
  }}>Xuất báo cáo</button>
        </div>
      </div>
    </div>
  );
}

export default Report;
