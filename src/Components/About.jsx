import {useState} from "react";
const About = () =>{
    var [text,setText]=useState("Hitesh");

    function handelText(event) {
        setText(event.target.value);
    }

    return( 
        <div>
            <h2>Welcome Page </h2>
            <h2>TextArea:</h2>
         {/* <textarea value={text} onChange={()=>setText(event.target.value)}/> */}
         <textarea value={text} onChange={handelText}/>
            <p>The text is {text}</p>
        </div>
    );
    };
    
    export default About;