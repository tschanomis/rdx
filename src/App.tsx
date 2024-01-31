import "./App.css";

import { useEffect } from "react";

import { useAppSelector } from "./core/redux/hooks";

import AddItem from "./components/forms/AddItem/AddItem.component";
import ItemsList from "./components/lists/itemsList/itemsList.component";

function App() {
  const stringItems = useAppSelector((state) => state.items.value);

  useEffect(
    () => localStorage.setItem("appItems", JSON.stringify(stringItems)),
    [stringItems]
  );

  return (
    <div className="App">
      <AddItem />
      <ItemsList stringItems={stringItems} />
    </div>
  );
}

export default App;
