import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success")
    }

    const handelLower = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success")
    }

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const clear = () => {
        setText('');
        props.showAlert("Converted to Clear text","success")
    }

    const handleCopy = () => {
        var newText = document.getElementById("formExa");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Converted to Copied","success")
    }

    const handleExtraSpace = () => {
        var newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Converted to UExtra space Removed","success")
    }

    return (
        <>
            <div className="mb-3" style={{ color: props.mode ==='dark'?'white':'black' }}>
                <h1  style={{ color: props.mode ==='dark'?'white':'black' }}>{props.h}</h1>
                <textarea className="form-control" value={text} onChange={handleChange} style={{ backgroundColor: props.mode === "dark" ? "grey" : "white"  ,color: props.mode ==='dark'?'white':'black'}} id="formExa" rows="8"></textarea>
            </div>
            <button className="btn btn-primary m-3" onClick={handleClick}>Convert to Uppercase</button>
            <button className="btn btn-primary" onClick={clear}>Clear Text</button>
            <button className="btn btn-primary m-3" onClick={handelLower}>Convert to Lowercase</button>
            <button className="btn btn-primary m-3" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary m-3" onClick={handleExtraSpace}>Remove Extra Space</button>
            <div className="container my-5" style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h3>Your Text Summary</h3>
                <p>Words: {text.split(/\s+/).filter((word) => word !== "").length} | Characters: {text.length}</p>
                <p>{0.008 * text.split(" ").length} Minutes Read..</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter somthing on your text box"}</p>
            </div>
        </>
    );
}
