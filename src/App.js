import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Screens/Home";
import Cart from "./Screens/Cart";
import Login from "./Screens/Login";
import Header from "./Component/Header/Header";
import ProductDetail from "./Component/ProductDetails/ProductDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/cart" exact>
            <Cart />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/:productId" exact>
            <ProductDetail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
