import { ItemsListType } from "./itemsList.type";

function ItemsList({ stringItems }: ItemsListType) {
  return (
    <div className="ItemsList">
      <ul>
        {stringItems.map((stringItem, i) => (
          <li key={`articleList_${i}`}>
            <article>{stringItem}</article>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemsList;
