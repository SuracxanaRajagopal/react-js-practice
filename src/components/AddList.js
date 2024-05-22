import React from 'react';


const AddList = ({ getItem, setItem, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input className="inputAdd"
        type="text"
        placeholder="Add Item"
        value={getItem}
        onChange={(e) => setItem(e.target.value)}
      />
      <button type="submit" className="add">+</button>
    </form>
  );
};

export default AddList;
