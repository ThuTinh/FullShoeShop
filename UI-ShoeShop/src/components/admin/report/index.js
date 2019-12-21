import React from "react";

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
          <button className="outline-button">Xuất báo cáo</button>
        </div>
      </div>
    </div>
  );
}

export default Report;
