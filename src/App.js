import './App.css';
import { useState, useEffect } from 'react';
import Hader from './components/Hader';
import Content from './components/Content';
import Footer from './components/Footer';
import AddList from './components/AddList';

function App() {
  const [items, setItems] = useState([
    { id: 1, name: "surax", checked: true, experience: "yes" },
    { id: 2, name: "malar", checked: false, experience: "no" },
    { id: 3, name: "rakul", checked: true, experience: "yes" },
    { id: 4, name: "thurka", checked: false, experience: "yes" },
    { id: 5, name: "shan", checked: false, experience: "yes" }
  ]);

  // State for new item input
  const [getItem, setItem] = useState("");

  // Retrieve items from localStorage on component mount
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("mylist"));
    if (storedItems) {
      setItems(storedItems);
    }
  }, []);

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = { id, name: item, checked: false }; // Correctly set the name property
    const listItems = [...items, addNewItem];
    setItems(listItems);
    localStorage.setItem("mylist", JSON.stringify(listItems));
  };

  // Toggle checked status
  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("mylist", JSON.stringify(listItems));
  };

  // Delete item
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("mylist", JSON.stringify(listItems));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!getItem.trim()) return;
    addItem(getItem);
    setItem("");
  };

  return (
    <div className='App'>
      <Hader title="surax" />
      <AddList
        getItem={getItem}
        setItem={setItem}
        handleSubmit={handleSubmit}
      />
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
