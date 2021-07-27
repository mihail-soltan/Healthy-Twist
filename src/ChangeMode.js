import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import "./changeMode.css"
import 'bootstrap/dist/css/bootstrap.min.css'; 

const ChangeMode =()=>{
  const [darkMode, setDarkMode] = useState(false);
const handleToggle=() => setDarkMode(!darkMode)
console.log(darkMode)
return(
     <div className={darkMode ? "dark-mode" : "light-mode"}>
 <Form>
  <Form.Check 
    type="switch"
    id="custom-switch"
    label="Change Mode"
    onChange={handleToggle}
  />
  </Form>
</div>
)

}
export default ChangeMode