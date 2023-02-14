import "./App.css";
import { FilterableProductTable, PRODUCTS } from "./index.js";

function App() {
  return (
    <div className="App">
      <FilterableProductTable products={PRODUCTS} />
    </div>
  );
}

export default App;
