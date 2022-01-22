// import React from 'react'
import React, { useState } from 'react'



export default function TextForm(props) {
    
    const changeUppercase= () =>{
    
        let newText = Text.toUpperCase()
        setText(newText)
        props.showAlert('Converted Text To Upper Case','success');
    }

    const changeClear= () =>{
    
        let newText = ""
        setText(newText)
        props.showAlert('Your Textarea Has been Clear','success');

        
    }

    const changeLowercase= () =>{
    
        let newText = Text.toLowerCase()
        setText(newText)
        props.showAlert('Converted Text To Lower Case','success');

    }

    const textOnChange = (e)=>{
        // console.log('On change');
        setText(e.target.value)
    }

    const copyAllText = ()=>{
        var text = document.getElementById('mybox')
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert(' Text To The Copied','success');

    }

    const removeExtraSpace = () =>{
        let newText = Text.split(/[ ]+/)
        setText(newText.join(" "))
        // props.showAlert(' Text To The Copied','success');
        props.showAlert('Extra Spaces has been removed','success');


    }

    const [Text, setText] = useState('')

    return (
        < >
        <div className='container'style={{color : props.mode==="dark"?"white":"black"}} >
            <h1>{props.heading}</h1>
            <div className='mb-3'>
                <textarea className='form-control' style={{backgroundColor : props.mode==="dark"?"grey":"white",
                color : props.mode==="dark"?"white":"black" }} placeholder='Enter Your text'  value={Text} id='mybox'onChange={textOnChange} rows={8}>                   
                </textarea>
                <br/>            
                    <button className='btn btn-primary mx-1' onClick={()=>changeUppercase()}>Convert Text to Upper Case</button>
                    <button className='btn btn-success mx-1' onClick={()=>changeLowercase()}>Convert Text to Lower Case</button>
                    <button className='btn btn-primary mx-1' onClick={()=>changeClear()}>Clear Text</button>
                    <button className='btn btn-primary mx-1' onClick={()=>copyAllText()}>Copy Text</button>
                    <button className='btn btn-primary mx-1' onClick={()=>removeExtraSpace()}>Remove Extra Space of Text</button>





            </div>
        </div>
        <div className='conatainer my-3' style={{color : props.mode==="dark"?"white":"black"}}>
            <h2>Your Text Summary</h2>
            <p>{--Text.split(" ").length} words and {Text.length} characters</p>
            <p>{0.008 * Text.split(" ").length} Timer to read this paragraph</p>
            <h2>Preveiw text</h2>
            <p>{Text}</p>
        </div>
        </>
    )
}
