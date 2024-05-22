import React from 'react'
import { FaPlus } from "react-icons/fa";


const AddList = ({getItem,setItem,addSubmit}) => {
  return (
   <form className='addform'>
    <label htmlFor='addItem'></label>

    <input className="inputAdd"
    onSubmit={addSubmit}
    autoFocus
    id='addItem'
    type='text'
    placeholder='add new items '
    required
    value={getItem}
    onChange={(e)=>setItem(e.target.value)}
    >
    </input>

<button
className="add"
type='submit'
>
  <FaPlus/>  
</button>

   </form>
   
    
  )
}

export default AddList
