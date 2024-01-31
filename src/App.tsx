import "./App.css";

import { useState, useEffect } from "react";

import { useAppSelector, useAppDispatch } from "./core/redux/hooks";
import { addItem } from "./core/redux/itemsSlice";

function App() {
  const stringItems = useAppSelector((state) => state.items.value);
  const dispatch = useAppDispatch();

  const [newItem, setNewItem] = useState<string>("");

  useEffect(
    () => localStorage.setItem("appItems", JSON.stringify(stringItems)),
    [stringItems]
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewItem(e.target.value);
  };

  const handleAddItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newItem.trim() !== "") {
      dispatch(addItem(newItem));
      setNewItem("");
    }
  };

  //make components
  return (
    <div className="App">
      <form onSubmit={handleAddItem}>
        <input type="text" value={newItem} onChange={handleInputChange} />
        <input type="submit" value="ajout" />
      </form>
      <div>
        <ul>
          {stringItems.map((e) => (
            <article>
              <li>{e}</li>
            </article>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
