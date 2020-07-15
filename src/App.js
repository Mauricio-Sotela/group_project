import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Data from "./data.json";
import MenuTwo from "./components/MenuTwo";
import Home from "./components/Home";
import Product from "./components/Product";
import ProductInfo from "./components/ProductInfo";
// import Cart from "./components/Cart";
import Soon from "./components/Soon";
import CartContainer from "./components/CartContainer";

import { createStore } from "redux";
import reducer from "./redux/reducer";

import { Provider } from "react-redux";

// store
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
      <Router basename={process.env.PUBLIC_URL}>
        <MenuTwo />

        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/cart" exact component={CartContainer} />

          <Route
            path="/product/:id"
            component={({ match }) => <ProductInfo id={match.params.id} />}
          />
          <Route path="/product" exact component={() => <Product />} />

          <Route path="/soon" exact component={Soon} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
