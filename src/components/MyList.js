import React from 'react'
import LableList from './LableList'
import { FaTrashAlt } from "react-icons/fa";

const MyList = ({items,Check,Delete}) => {
  return (
        <ul>
        {items.map((item)=>(
        //     <LableList
        //     key={item.id}
        //     items={items}
        //    Check={Check}
        //   Delete={Delete}/>
        <li className="item" key={item.id}>
         
         
    <label 
    onDoubleClick={()=>Check(item.id)} 
    style={(item.checked)? {textDecoration: 'line-through'}:null}>
      {item.id}.{item.name}
    
    </label>

    <input type="checkbox"
            checked={item.checked}
            onChange={()=>Check(item.id)}/>
    
    < FaTrashAlt
    role="button"
    tabIndex="0"
    onClick={()=>Delete(item.id)}
   />
    </li>

        ))}
        
        
      </ul>
      )
    }
    
  
export default MyList
