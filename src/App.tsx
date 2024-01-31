import "./App.css";

import { useEffect } from "react";

import { useAppSelector } from "./core/redux/hooks";

import setLocalStorage from "./core/services/localStorage/setLocalStorage";

import AddItem from "./components/forms/AddItem/AddItem.component";
import ItemsList from "./components/lists/ItemsList/ItemsList.component";

function App() {
  const stringItems = useAppSelector((state) => state.items.value);
  useEffect(() => setLocalStorage(stringItems), [stringItems]);
  return (
    <div className="App">
      <AddItem />
      <ItemsList stringItems={stringItems} />
    </div>
  );
}

export default App;
