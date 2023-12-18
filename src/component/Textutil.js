import React, {useState} from 'react'

export default function Textutil(props) {
    const TextupCase=()=>{
        let newtext=text.toUpperCase();
        setText(newtext)
        props.showalert("Text convert into UpperCase", "success");
    }
    const TextloCase=()=>{
        let newtext=text.toLowerCase();
        setText(newtext)
        props.showalert("Text convert into LowerCase", "success");
    }
    const EmailExtrat=()=>{
        // props.showalert("Email is Extrat from Text", "success");
        return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
    }
    const TextupChange=(event)=>{
        setText(event.target.value)
    }
    const handleExtraSpace=()=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showalert("Extra space has been remove", "success");
    }
    const [text, setText] = useState(".");
  return (
  <div>
    <div className="continer mx-4" style={{color: props.mode==='black'?'white':'black'}}>
      <div className="mb-3">
        <h1>{props.title}</h1>
        <textarea className="form-control" value={text} onChange={TextupChange} style={{backgroundColor: props.mode==='black'?'gray':'white', color: props.mode==='black'?'white':'black'}} id="exampleFormControlTextarea1" rows="5" ></textarea>
      </div>
      <button type="submit" className="btn btn-primary mx-1" onClick={TextupCase}>{props.submit}</button>
      <button type="submit" className="btn btn-primary mx-1" onClick={TextloCase}>{props.submit2}</button>
      <button type="submit" className="btn btn-primary mx-1" onClick={handleExtraSpace}>{props.submit3}</button>
      <button type="submit" className="btn btn-primary" onClick={EmailExtrat}>{props.submit4}</button>
      </div>
      <div className="contine mx-4" style={{color: props.mode==='black'?'white':'black'}}>
      <h1>Text summary</h1>
      <p>{(text.split(" ").length-1)} Number of words and {(text.length-1)} Number of Character</p>
      <p>Email: {EmailExtrat() }</p>
      <p>{0.08*(text.split(" ").length-1)} word reading time</p>
      <h3>Preview</h3>
      <p>{(text.length-1)>0?text:"Write text to preview"}</p>
      </div>
  </div>
  )
}
