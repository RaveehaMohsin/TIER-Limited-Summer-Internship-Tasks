import React, { useState } from 'react';
import { MDBInput } from 'mdb-react-ui-kit';
import './form.css';

export default function Form() {

  const [color , setColor] = useState("rgba(232, 206, 206, 0.358)");
  const onchangecolor = ()=>
  {
   var colors= document.getElementById("colorpicker");
   setColor(colors.value);
  };
  return (
    <div>
      <h1 style={{ marginTop: '2%' , color: color}}>Color Picker</h1>
      <div className="container" style={{ backgroundColor: color}}>
        <h4 style={{margin: "2%"}}>Billing Details</h4>
        <div className="minputs">
          <MDBInput label="First Name" id="formControlDefault1" type="text" />
          <MDBInput label="Last Name" id="formControlDefault2" type="text"  />
        </div>
        <div className="minputs">
          <MDBInput label="Address" id="formControlDefault3" type="text"  />
        </div>
        <div className="minputs">
          <MDBInput label="Email" id="formControlDefault4" type="email" />
        </div>
        <div className="minputs">
          <MDBInput label="Phone" id="formControlDefault5" type="tel" />
        </div>
        <div className="minputs">
          <MDBInput id="colorpicker" type="color" />
        </div>
        <div className="mbutton">
          <button onClick={onchangecolor}  id="changecolorbutton">Change Color</button>
        </div>
      </div>
    </div>
  );
}
