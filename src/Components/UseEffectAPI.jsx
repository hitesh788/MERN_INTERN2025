import { useRef, useState } from 'react';

const Useref = () => {
    var [text, setText] = useState("");
    // var prevRender = use

    return (
        <div>
            <h2>This is the page of the USEREF hooks</h2>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <h4>The text is {text}</h4>
        </div>
    );
};

export default Useref;