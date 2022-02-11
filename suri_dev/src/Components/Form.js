

import React,{useState} from 'react'


export default function Form(props) {

    

    

    const onclickhandlr=()=>{
        // console.log('you clicked');
        let new_txt=Text.toUpperCase();
        setText(new_txt);
        if(new_txt===""){
            alert("Please enter the text to analyse");
        }
        
        
        
    }

    const onchangehandlr=(event)=>{
        setText(event.target.value)
        
       

    }
    const onclickhandlr2=()=>{
        let new_txt=Text.toLocaleLowerCase();
        setText(new_txt);
        if(new_txt===""){
            alert("Please enter the text to analyse");
        }
       

    }

    
    const onclickclear=()=>{
            let new_txt="";
            setText(new_txt);
    }
    const onclickdark=()=>{
      
       if(mystyle.color==="black"){
        setbtntext("Enable dark mode");
        setmystyle({
        color:"white",
        background:"black"
        })
       }
       else{
        setbtntext("Enable light mode");
        setmystyle({
            color:"black",
            background:"white"  
        })  
       }
           
    }

    // let mystyle={
    //     color:"white",
    //     background:"black"
    // }






    const [Text, setText] = useState('');
    const [btntxt, setbtntext] = useState("Enable Dark mode");
    const [mystyle, setmystyle] = useState({
        color:"black",
        background:"white"
    });
    
    return (
        <>
            <div className='container'>
                <h3 className='head'>{props.heading}</h3>
                <button className="btn btn-outline-danger" id='darkmode' onClick={onclickdark}>{btntxt}</button>

                
                    <div className="form-group">
                        <textarea className="form-control" style={mystyle} value={Text} onChange={onchangehandlr} id="my_box" rows="8" placeholder='Drop your text here'></textarea>
                    </div>
                    <button className="btn btn-outline-success" onClick={onclickhandlr}>Convert to uppercase</button>
                    <button className="btn btn-outline-dark mx-3" onClick={onclickhandlr2}>Convert to lowercase</button>
                    <button className="btn btn-outline-danger" onClick={onclickclear}>Clear Text</button>
                   
                
            </div>
            <div className="container">
                <h3 className='head'>Your text summery</h3>
                <p>Number of words <span className="badge badge-danger"><strong>{Text.split(" ").length-1}</strong></span> and character<span className="badge badge-warning"> <strong>{Text.length}</strong></span></p>
                <p>Minuts count to read <span className="badge badge-success"><strong> {0.008 * (Text.split(" ").length-1)}</strong></span></p>
                <h5 className='head'>Search your word occurance</h5>
                <input className="form-control mr-sm-2 col-2 my-3" type="search" id='word_srch' placeholder="Search" aria-label="Search" />
            </div>

            <div className="container">
                <h3 className='head'>Preview Text</h3>
                <p id='prev'>{Text}</p>
             
            </div>
        </>
    )
}
