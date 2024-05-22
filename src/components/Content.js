import React from 'react'

import MyList from './MyList'

const Content = ({items,Check,Delete}) => {
return(
  <main>
  
{(items.length)?(
  <MyList
  items={items}
  Check={Check}
  Delete={Delete}/>
  
    ):
        (<p>your list is empty !!</p>)
  }
  </main>
)
}

export default Content
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

