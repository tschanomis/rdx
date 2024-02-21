import "./App.css";

import { useAppSelector } from "./core/redux/hooks";

import AddItem from "./components/forms/AddItem/AddItem.component";
import ItemsList from "./components/lists/ItemsList/ItemsList.component";

function App() {
  const stringItems = useAppSelector((state) => state.items.value);
  return (
    <div className="App">
      <AddItem />
      <ItemsList stringItems={stringItems} />
    </div>
  );
}

export default App;
