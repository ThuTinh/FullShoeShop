import React from 'react';
import 'antd/dist/antd.css';
import routes from './routes/route';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';




function App() {
  return (
    <Router>
      {showPage(routes) }
    </Router>


  );
}

const showPage = (routes) => {
  var result = null;
  if (routes.length > 0) {
    result = routes.map((item, index) => {
      return <Route key={index} path={item.path} exact={item.exact} component={item.main} ></Route>
    });
  }
  return <Switch>{result}</Switch>;

}

export default App;
