const data = {
  lecture: false,
  study: false,
  test: false
};

const items = document.getElementById('items');
const inputButton = document.getElementById('inputButton');

const addItem = () => {
  const inputVal = document.getElementById('todoInput');

  if (!Object.keys(data).includes(inputVal.value)) {
    data[inputVal.value] = false;
    const newItem = document.createElement('div');
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'x';
    newItem.setAttribute('id', inputVal.value);
    deleteButton.addEventListener('click', deleteItem);
    newItem.innerHTML = inputVal.value;
    items.appendChild(newItem);
    newItem.appendChild(deleteButton);
  }
  inputVal.value = '';
  console.log(data);
};

const deleteItem = e => {
  // remove for the data obj
  const deletedItem = e.target.parentNode;
  delete data[deletedItem.id];
  // removechild from items
  items.removeChild(deletedItem);
};

const getItems = () => {
  Object.keys(data).forEach(item => {
    const newItem = document.createElement('div');
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'x';
    newItem.setAttribute('id', item);
    deleteButton.addEventListener('click', deleteItem);
    newItem.innerHTML = item;
    items.appendChild(newItem);
    newItem.appendChild(deleteButton);
  });
};

inputButton.addEventListener('click', addItem);

getItems();
