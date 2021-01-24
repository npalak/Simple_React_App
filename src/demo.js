import React from 'react';
import "./App.css";
import {Card,CardGroup} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
 class demo extends React.Component {
  
render(){
  return (
    <div >
    <Card className="abcontainer" >
    <Card.Body>
    <Card.Title>Card Title</Card.Title>  
   </Card.Body>
   <CardGroup>
   <Card className="checkboxContainer" >
   <Card.Body>
    <Card.Title>Checkbox</Card.Title>
    <div>InActive Checkbox</div>  
    <div>Disabled Checkbox</div>  
    <div>Active Checkbox</div>  
   </Card.Body>
   </Card>

   <Card className="buttonContainer" >
   <Card.Body>
    <Card.Title>Button</Card.Title>  
    <button className="button">Click Me!</button> 
    <span>Normal State</span><br/>
    <button className="button">Click Me!</button>
     <span>Focused State</span><br/>
    <button className="button">Click Me!</button>
     <span>Pressed State</span><br/>
    <button className="button">Click Me!</button> 
    <span>Disabled State</span>

   </Card.Body>
   </Card>
   </CardGroup>

   <Card className="textboxContainer" >
   <Card.Body>
    <Card.Title>TextBox</Card.Title>  
     <input type="text" /><div>Normal State</div>
     <input type="text" /> <div>Focused State</div>
   </Card.Body>
   </Card>
   
   </Card>
        
    
    </div>
  );
}
}
export default demo;