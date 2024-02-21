import { Provider } from "react-redux";
import store from "./Store/Store";
import CartPage from "./cartPage";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Shopping Cart</h1>
        <CartPage />
      </div>
    </Provider>
  );
}

export default App;
