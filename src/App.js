import React from 'react';
import './App.css';
import Counter from './pages/Counter'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListProduct from './pages/ListProduct'
import Home from './pages/Home'
import Navigasi from './component/Navigasi'


function App() {
  return (
    <div>
      
      <Router>
      <Navigasi />
        <Switch>
          <Route exact path={"/"}>
          <Home />
          </Route>
          <Route path={"/counter"}>
          <Counter />
          </Route>
          <Route path={"/listproduct"}>
          <ListProduct />
          </Route>   
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;
