import React,{useState} from 'react'

export default function TextForm(props) {

  const[text,setText]=useState("");

    const handleUpClick = () =>{
    let newText=text.toUpperCase();
    setText(newText)
    }

    const handleLoClick = () =>{
    let newText=text.toLowerCase();
    setText(newText)
    }

    const copyText = () =>{
      var text=document.getElementById('myBOx');
      text.select();
      navigator.clipboard.writeText(text.value)
    }

   const handleCapitalize = () => {
       let newText = text
      .toLowerCase()
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
      setText(newText);
};

    
    const cleareText = () =>{
    setText("")
    }

    const handleOnChange = (event) =>{
    console.log("on Changed") 
    setText(event.target.value);
    }

    
  return (
    <>
    <div className="container">
    <h2 className="text-center">{props.heading}</h2>
    <div className="mb-3">
      <textarea className="form-control" id="myBOx" rows="10" value={text} onChange={handleOnChange}></textarea>
    </div>

    <div className="container my-4">
  <div className="row justify-content-center">
    <div className="col-12 col-md-auto d-flex flex-wrap justify-content-center">
      <button className="btn btn-primary mx-2 my-1 btn-sm" onClick={cleareText}>
        Clear Text
      </button>
      <button className="btn btn-primary mx-2 my-1 btn-sm" onClick={handleUpClick}>
        Convert to UPPERCASE
      </button>
      <button className="btn btn-primary mx-2 my-1 btn-sm" onClick={handleLoClick}>
        Convert to lowercase
      </button>
      <button className="btn btn-primary mx-2 my-1 btn-sm" onClick={handleCapitalize}>
        Convert to Capitalizecase
      </button>
       <button className="btn btn-primary mx-2 my-1 btn-sm" onClick={copyText}>
        Copy Text
      </button>
      
    </div>
  </div>
</div>

    </div>

    <div className="container my-4 text-center">
        <h3>Your Text summary</h3>
        <p>Your text contains {text.trim() === "" ? 0 : text.trim().split(/\s+/).length} words, and {text.length} characters.</p>
    </div>

    </>
  )
}
