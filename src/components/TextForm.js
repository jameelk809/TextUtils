import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log('uppercase was clicked' + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }
    
    const handleLoClick = () => {
        // console.log('uppercase was clicked' + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    }

    const handleClearClick = () => {
        // console.log('uppercase was clicked' + text);
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert("Extra spaces removed", "success");
    }

    const handleCopy = () => {
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard", "success");
    }

    function countWords(str) {
        const arr = str.split(' ');
        return arr.filter(word => word !== '').length;
     }

    const [text, setText] = useState('');
    // text = "new text";      // wrong
    // setText("new text");   // correct
    return (
        <>
            <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
                <h3>{props.heading}</h3>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'rgb(27 27 27)':'white', color:props.mode==='dark'?'white':'blsck'}} id="myBox" rows="8"></textarea>
                </div>
                <div>
                    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                    <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
                    <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy</button>
                    <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                </div>
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>Your text summary</h1>
                <p>{countWords(text)} words and {text.length} characters</p>
                <p>{0.008 * countWords(text)} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Start typing to preview"}</p>
            </div>
        </>
    )
}
