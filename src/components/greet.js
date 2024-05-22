import React from 'react';

 export const Greet=props=>{
   console.log(props);
    return(
      <div>
 <h1>good morning {props.name} you are {props.age} years old now </h1>
 {props.children}
 </div>
    )
 }
