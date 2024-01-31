const itemsString = localStorage.getItem("appItems");
const items = itemsString ? JSON.parse(itemsString) : [];

export default items;
