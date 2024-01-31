function ItemsList({ stringItems }: { stringItems: Array<string> }) {
  return (
    <div className="ItemsList">
      <ul>
        {stringItems.map((stringItem, i) => (
          <article key={`articleList_${i}`}>
            <li>{stringItem}</li>
          </article>
        ))}
      </ul>
    </div>
  );
}

export default ItemsList;
