import "./App.css";

import { useEffect } from "react";

import { useAppSelector } from "./core/redux/hooks";

import AddItem from "./components/forms/AddItem/AddItem.component";

function App() {
  const stringItems = useAppSelector((state) => state.items.value);

  useEffect(
    () => localStorage.setItem("appItems", JSON.stringify(stringItems)),
    [stringItems]
  );

  //make components
  return (
    <div className="App">
      <AddItem />
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
