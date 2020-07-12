import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// I can convert a react module with a long name into what want, ex:
// {BrowserRouter} i can change it to just Router by typing "as" like so:
// { BrowserRouter as Router, Switch, Route }

//COMPONENTS
import Data from "./data.json";
import MenuTwo from "./components/MenuTwo";
import Home from "./components/Home";
import Product from "./components/Product";
import ProductInfo from "./components/ProductInfo";
import Cart from "./components/Cart";
import Soon from "./components/Soon";
import CartContainer from "./components/CartContainer";

// redux stuff
import { createStore } from "redux";
import reducer from "./components/reducer";
// react-redux - Provider - wraps app , connect - used in components
import { Provider } from "react-redux";

// initial store

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
<CartContainer/>
        <Switch>
          {/* 
                normal:  <Route path="/" exact component={Home} />
                Use this way if there s a problem with the DEPLOYment:
                <Route path={process.env.PUBLIC_URL + "/"} exact component={Home} /> 
               - PUBLIC_URL will grab the root URL from that server, and 
  
            */}
          <Route path={process.env.PUBLIC_URL + "/"} exact component={Home} />
          {/* -------------- */}

          <Route path="/cart" exact component={Cart} />
          <Route
            path="/product/:id"
            component={({ match }) => (
              <ProductInfo  id={match.params.id} />
            )}
          />
          <Route
            path="/product"
            exact
            component={() => <Product data={Data} />}
          />
          <Route
            path={() => "/main" || "/admin" || "/any-other-word"}
            component={Soon}
          />
          {/* 
             <Route path="/*" component={Soon} />
            */}
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;

/**


   
          
          -The example below is not ideal for all the ways:
              <Route path="/product" component={() => <Product data={Data} />} />
          - <Product data={Data} /> to see the maping of this go to the Product.js

        

the href like for links from react, how can you reach them from
scss without having to add a class ?


 */
