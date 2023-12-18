import React, { useState } from "react";
import Navebar from "./component/Navebar";
import Textutil from "./component/Textutil";
import Alert from "./component/Alert";
import About from "./component/About";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  const[mode, setmode] = useState('light');
  const[alert, setalert] = useState(null);
  const showalert=(message, type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  const toggleMode=()=>{
    if(mode === 'light'){
      setmode('black');
      document.body.style.backgroundColor='#477099';
      showalert("Dark Mode has been Enable", "success");
      document.title='Dark mode Enable';
      setTimeout(() => {
        document.title='TextUtilit-Home';
      }, 2500);
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      document.title='light mode Enable';
      setTimeout(() => {
        document.title='TextUtilit-Home';
      }, 2500);
    }
  }
  return (
    <>
    <Router>
    <Navebar title="TextUtils" about="About" Blog="Blog" mode={mode} toggleMode={toggleMode} />
      <Alert alert = {alert}/>  
      <div className="container my-3">
        <Routes>   
          <Route path="/About" element={<About/>} />
          <Route path="/" element={<Textutil showalert={showalert} title="Enter the text analyze below" mode={mode} submit="Convert to UpperCase" submit2="Convert to LowerCase" submit3="handleExtraSpace" submit4="Email Extract"/>} />
        </Routes>
      </div>
   </Router>
    </>
  );
}
export default App;
