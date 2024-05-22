//import React, {Component} from 'react';
import './App.css';
import { useState } from 'react';
//import  {Greet} from './components/greet'
//import Class_component from './components/class_component';
import Hader from './components/Hader';
import Content from './components/Content';
import Footer from './components/Footer';
import AddList from './components/AddList';

function App ()
{
  const [items,setItems]=useState([
    {
      id:1,
      name:"surax",
      checked:true,
      experiance:"yes"
    },
    {
      id:2,
      name:"malar",
      checked:false,
      experiance:"no"
    },
    {
      id:3,
      name:"rakul",
      checked:true,
      experiance:"yes"
    },
    {
      id:4,
      name:"thurka",
      checked:false,
      experiance:"yes"
    },
    {
      id:5,
      name:"shan",
      checked:false,
      experiance:"yes"
    }
  
  ])
  //add new item -create new stste inputget(getItem) nextInput(setItem)
  const [getItem,setItem]=useState("")


  //function check
  const Check=(id)=>{
  const listitems=items.map((item)=>item.id===id?{...item,checked:!item.checked}:item)
    setItems(listitems)
    localStorage.setItem("mylist",JSON.stringify(listitems))
  }
  
  //function delete
  const Delete=(id)=>{
    const listitems=items.filter((item)=>
    item.id!==id) 
    setItems(listitems)
    localStorage.setItem("mylist",JSON.stringify(listitems))
  }
  
  //add button function
  const addSubmit=(e)=>{
    e.preventDefault()
    console.log("submitted")
  }
  
  return (
    <div className='App' >
      
      <Hader title="surax"/>
      <AddList
        getItem={getItem}
        setItem={setItem}
        addSubmit={addSubmit}
      
      />

      <Content
          items={items}
          Check={Check}
          Delete={Delete}/>


  <Footer
  legnthIs={items.length}/>


     {/* <Class_component/>
        <Greet >
        <button>submit</button>
        <p>morning guys</p>
          </Greet>
        <Greet name="surax" age="18"/>
        <Greet name="isha" age="27"/>*/}
      
   
       
    </div>
  );
}

export default App;
