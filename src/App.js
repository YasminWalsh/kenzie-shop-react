import { Route, Switch } from "react-router-dom";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Products from "./components/Products";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />

      <Switch>
        <Route exact path="/">
          <Products />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
