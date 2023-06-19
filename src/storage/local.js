export function setItem(key, value) {
    const setItemMock = jest.fn();
    setItemMock(key, value);
    global.localStorage.setItem = setItemMock;
  }