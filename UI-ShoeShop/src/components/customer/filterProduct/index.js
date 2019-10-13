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
        Giày thể thao
        <div className="divide"></div>
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
        Giày scanel
      </div>
    </div>
  );
}

export default FilterProduct;
