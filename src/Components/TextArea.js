import React, { useState } from "react";
const Textspace = () => {
    const [text,setText] = useState("Enter your Text")
    function handleChange(events){
        setText(events.target.value)
    };
    function handleUpperClick() {
        const UpperText = text.toUpperCase();
        setText(UpperText);
    }
    function handleLowerClick() {
        
        const LowerText = text.toLowerCase();
        setText(LowerText);
    }
    function handleClearClick() {
        
        const clearText = "";
        setText(clearText);
    }
    return (
        <div className="container">
            <h1 style={{padding: "18px 0px 5px 0px"}}> Enter Your Text 2 Analyze</h1>
            <div class="form-floating">
                <textarea onChange={handleChange} className="form-control" value={text} placeholder="Here Enter your text" id="floatingTextarea2" style={{height: "200px"}}></textarea>
                <label HtmlFor="floatingTextarea2">Analyzing....</label>
            </div>
            <button type="button" onClick={handleUpperClick} class="btn btn-outline-success my-3 mx-3">Convert Text To UPPER Case</button>
            <button type="button" onClick={handleClearClick} class="btn btn-outline-danger my-3 mx-3">Clear the Text</button>
            <button type="button" onClick={handleLowerClick} class="btn btn-outline-success my-3 mx-3">Convert Text To lower Case</button>
            <h2 style={{fontFamily: "Moon dance"}}>Your text Containes <span style={{textDecoration:"Underline"}}>{text.length}</span> Characters & <span style={{textDecoration:"Underline"}}>{text.split(" ").length}</span> Words</h2>
            <hr/>
            <p>The Preview of your Text is: </p>
            <div class="border border-success p-2 mb-2 border-opacity-75"><p>{text.substring(0,150)}....</p></div>
        </div>
    );
};

export default Textspace;
