import React from 'react';
import { FaTrashAlt } from "react-icons/fa";

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <main>
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li key={item.id} className="item">
              <input 
                type="checkbox"
                checked={item.checked}
                onChange={() => handleCheck(item.id)}
              />
              <label
                style={item.checked ? { textDecoration: "line-through" } : null}
                onDoubleClick={() => handleCheck(item.id)}
              >
                {item.name}
              </label>
              <button onClick={() => handleDelete(item.id)}><FaTrashAlt/></button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your list is empty.</p>
      )}
    </main>
  );
};

export default Content;

       /* function HandleNameChange()
            {
            const names=["Guys","friends","dears"];
            const int=Math.floor(Math.random()*3);
            return names[int]

            }
        const HandleClick=()=>
            {
            console.log("Thanks for visit our webpage!!");
            }
        const [count,setCount]=useState(1);
        function increseCount()
            {
                setCount(count+1);
            }
         function decreseCount()
            {
                setCount(count-1);
            }
        const [s,st]=useState(()=>HandleNameChange());

  return (
    <main>
      <p>Hello {HandleNameChange()} welcome !!!</p><br/>
      <button onClick={st}>subscribe</button><br/>
      <button onClick={increseCount}>+</button>
      <span>{count}</span>
      <button onClick={decreseCount}>-</button>
    </main>
  )*/

