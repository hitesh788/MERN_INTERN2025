import { useState } from 'react'
const UseCallback = () => {
    var [num, setNum] = useState(0);
    var [dark, setDark] = useState(true);
    var styling = {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black"
    }
    var getItems=() => {
        return [num + 1 ,num + 2, num + 3]
    }
    return (
        <div style={styling}> <button onClick={() => setDark(dark => !dark)}>Theme Change</button>
            <h1>Welcome to callback page</h1>
            <input type="number" value={num} onChange={(e) =>{ setNum(parseInt(e.target.value));}}/>

            <ListItems func={getItems} />
        </div>
      
    )
}
export default UseCallback;