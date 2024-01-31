import { useState } from "react";

import { useAppDispatch } from "../../../core/redux/hooks";
import { addItem } from "../../../core/redux/itemsSlice";

function AddItem() {
  const [newItem, setNewItem] = useState<string>("");

  const dispatch = useAppDispatch();

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

  return (
    <div className="AddItem">
      <form onSubmit={handleAddItem}>
        <input type="text" value={newItem} onChange={handleInputChange} />
        <input type="submit" value="ajout" />
      </form>
    </div>
  );
}

export default AddItem;
