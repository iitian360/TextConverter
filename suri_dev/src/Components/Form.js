

import React,{useState} from 'react'


export default function Form(props) {

    const onclickhandlr=()=>{
        // console.log('you clicked');
        let new_txt=Text.toUpperCase();
        setText(new_txt);
        
        
    }

    const onchangehandlr=(event)=>{
        setText(event.target.value)
       

    }
    const onclickhandlr2=()=>{
        let new_txt2=Text.toLocaleLowerCase();
        setText(new_txt2);
       

    }


    const [Text, setText] = useState('');
    return (
        <>
            <div className='container'>
                <h3 className='head'>{props.heading}</h3>
                
                    <div className="form-group">
                        <textarea className="form-control" value={Text} onChange={onchangehandlr} id="my_box" rows="8" placeholder='Drop your text here'></textarea>
                    </div>
                    <button className="btn btn-outline-success" onClick={onclickhandlr}>Convert to uppercase</button>
                    <button className="btn btn-outline-dark mx-3" onClick={onclickhandlr2}>Convert to lowercase</button>
                
            </div>
            <div className="container">
                <h3 className='head'>Your text summery</h3>
                <p>Number of words {Text.split(" ").length} and character {Text.length} </p>
                <p>Minuts count to read {0.008 * Text.split(" ").length}</p>
            </div>

            <div className="container">
                <h3 className='head'>Preview Text</h3>
                <p id='prev'>{Text}</p>
             
            </div>
        </>
    )
}
