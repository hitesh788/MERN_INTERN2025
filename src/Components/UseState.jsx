import {useState} from "react";
var UseState=() => {
    var initialValue=0
    var[num,setNum] = useState(0)
    return(
<div>
    <h1>The is useState example</h1>
    <button onMouseEnter={()=>setNum(num-1) }>-</button>
    <h4>The number is {num}</h4>
    <button onKeyDown={()=>setNum(num + 1)}>+</button>
    <button onClick={()=>setNum(initialValue)}>Reset</button>
</div>
    )
} 

export default UseState; 