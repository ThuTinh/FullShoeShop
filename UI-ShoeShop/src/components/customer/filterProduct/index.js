import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import "./style.css";

function FilterProduct() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };
  return (
    <div className="filter-contaner">
      <div className="filter-tile">Lọc sản phẩm</div>
      <div className="filter-content">
        <Checkbox
          onChange={handleChange("checkedB")}
          value="checkedA"
          color="primary"
          labe
          inputProps={{
            "aria-label": "secondary checkbox"
          }}
        />
        Giày nữ
        <div className="divide"></div>
        <div id="sub" style={{ marginLeft: "10%" }}>
          <Checkbox
            onChange={handleChange("checkedB")}
            value="checkedB"
            color="primary"
            labe
            inputProps={{
              "aria-label": "secondary checkbox"
            }}
          />
          Giày Cao got
          <div className="divide"></div>
          <Checkbox
            onChange={handleChange("checkedB")}
            value="checkedC"
            color="primary"
            labe
            inputProps={{
              "aria-label": "secondary checkbox"
            }}
          />
          Giày scanel
          <div className="divide"></div>
          <Checkbox
            onChange={handleChange("checkedB")}
            value="checkedC"
            color="primary"
            labe
            inputProps={{
              "aria-label": "secondary checkbox"
            }}
          />
          Giày scanel
          <div className="divide"></div>
          <Checkbox
            onChange={handleChange("checkedB")}
            value="checkedC"
            color="primary"
            labe
            inputProps={{
              "aria-label": "secondary checkbox"
            }}
          />
          Giày scanel
          <div className="divide"></div>
        </div>
        <Checkbox
          onChange={handleChange("checkedB")}
          value="checkedB"
          color="primary"
          labe
          inputProps={{
            "aria-label": "secondary checkbox"
          }}
        />
        Giày nam
        <div className="divide"></div>
        <div id="sub" style={{ marginLeft: "10%" }}>
          <Checkbox
            onChange={handleChange("checkedB")}
            value="checkedB"
            color="primary"
            labe
            inputProps={{
              "aria-label": "secondary checkbox"
            }}
          />
          Giày Cao got
          <div className="divide"></div>
          <Checkbox
            onChange={handleChange("checkedB")}
            value="checkedC"
            color="primary"
            labe
            inputProps={{
              "aria-label": "secondary checkbox"
            }}
          />
          Giày scanel
          <div className="divide"></div>
          <Checkbox
            onChange={handleChange("checkedB")}
            value="checkedC"
            color="primary"
            labe
            inputProps={{
              "aria-label": "secondary checkbox"
            }}
          />
          Giày scanel
          <div className="divide"></div>
          <Checkbox
            onChange={handleChange("checkedB")}
            value="checkedC"
            color="primary"
            labe
            inputProps={{
              "aria-label": "secondary checkbox"
            }}
          />
          Giày scanel
          <div className="divide"></div>
          <Checkbox
            onChange={handleChange("checkedB")}
            value="checkedC"
            color="primary"
            labe
            inputProps={{
              "aria-label": "secondary checkbox"
            }}
          />
          Giày boot
        </div>
        <Checkbox
          onChange={handleChange("checkedB")}
          value="checkedB"
          color="primary"
          labe
          inputProps={{
            "aria-label": "secondary checkbox"
          }}
        />
        Mức giá
        <div className="divide"></div>
        <div id="sub" style={{ marginLeft: "10%" }}>
          <Checkbox
            onChange={handleChange("checkedB")}
            value="checkedB"
            color="primary"
            labe
            inputProps={{
              "aria-label": "secondary checkbox"
            }}
          />
          0-200
          <div className="divide"></div>
          <Checkbox
            onChange={handleChange("checkedB")}
            value="checkedC"
            color="primary"
            labe
            inputProps={{
              "aria-label": "secondary checkbox"
            }}
          />
          200-500
          <div className="divide"></div>
          <Checkbox
            onChange={handleChange("checkedB")}
            value="checkedC"
            color="primary"
            labe
            inputProps={{
              "aria-label": "secondary checkbox"
            }}
          />
          500-1000
          <div className="divide"></div>
          <Checkbox
            onChange={handleChange("checkedB")}
            value="checkedC"
            color="primary"
            labe
            inputProps={{
              "aria-label": "secondary checkbox"
            }}
          />
          trên 1000
        </div>
      </div>
    </div>
  );
}

export default FilterProduct;
