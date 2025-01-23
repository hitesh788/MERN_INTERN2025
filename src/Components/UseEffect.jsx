import { useState } from "react";
const UseEffect = () => {
    var [text, setText] = useState("");
    return (
        <div>
            <h1>This is useEffect example</h1>
            <input type="number" value={text} />
            <h4>The text is {text}</h4>
        </div>
    )
}
export default UseEffect;