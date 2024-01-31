function setLocalStorage(stringItems: Array<string>) {
  localStorage.setItem("appItems", JSON.stringify(stringItems));
}

export default setLocalStorage;
