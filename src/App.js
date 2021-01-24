import React from 'react';
import "./App.css";
import {Card,CardGroup} from "react-bootstrap";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import {Button} from "reactstrap";
import Switch from "react-switch";
class App extends React.Component {
   constructor()
   {
     super();
     this.state={
       radiovalue:true,
       checked: false ,
       checked1: true ,
     }
   }
   handleClick=(event)=>{ this.setState({ radiovalue: !event.target.value})}
   handleChange=(checked)=>{ this.setState({ checked });}
   handleChange1=(checked1)=>{this.setState({ checked1 });}
  
render(){
  return (
   <div >
   <Card className="abcontainer" > 
   <CardGroup>
   <label>
   <Card.Title className="titleclass" >Checkbox</Card.Title>
   <Card className="checkboxContainer" >
   <Card.Body>
    <FormControlLabel value="disabled" filled disabled control={<Radio color="default" />} /> 
    <Checkbox disabled inputProps={{ 'aria-label': 'disabled checkbox' }} />&nbsp;&nbsp;&nbsp;
    <Switch onChange={this.handleChange} checked={this.state.checked} onColor="#86d3ff"
      onHandleColor="#2693e6" handleDiameter={30} uncheckedIcon={false} checkedIcon={false}
      boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)" activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
      height={20} width={48} className="react-switch" id="material-switch" />&nbsp;&nbsp;
    <label>InActive Checkbox</label><br/>
    {/* -------------------------------------------------- */}
    <FormControlLabel value="disabled" filled disabled control={
    <Radio checked={'e'} value="e" color="default" name="radio-button-demo" inputProps={{ 'aria-label': 'E' }} size="mediun"/>} /> 
    <Checkbox disabled checked inputProps={{ 'aria-label': 'disabled checked checkbox' }} />&nbsp;&nbsp;&nbsp;
    <Switch  disabled onColor="#86d3ff" onHandleColor="#2693e6" handleDiameter={30}
     uncheckedIcon={false} checkedIcon={false}
     boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
     activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
     height={20} width={48} className="react-switch" id="material-switch"/>&nbsp;&nbsp;
    <label>Disabled Checkbox</label><br/>  
     {/* -------------------------------------------------- */}
     <FormControlLabel value="female" control={<Radio color="primary"  checked={'e'}/>} onClick={this.handleClick} />
     <Checkbox defaultChecked color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }} /> &nbsp;&nbsp;&nbsp;
     <Switch onChange={this.handleChange1} checked={this.state.checked1} onColor="#86d3ff"
     onHandleColor="#2693e6" handleDiameter={30} uncheckedIcon={false} checkedIcon={false}
     boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)" activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
     height={20} width={48} className="react-switch" id="material-switch"/>&nbsp;&nbsp;
    <label>Active Checkbox</label><br/>
    {/* -------------------------------------------------- */}
   </Card.Body>
   </Card>
  </label>

  <label><Card.Title className="titleclass">Button</Card.Title>
   <Card className="buttonContainer" >
   <Card.Body>
    <button className="button firstbutton">Click Me!</button>&ensp; &ensp;
    <span>Normal State</span><br/><br/>
    <Button color="secondary" outline type="button" style={{borderBlockColor:'rgb(39, 119, 223)'}} >Click Me!</Button>  &ensp;&ensp;
     <span>Focused State</span><br/><br/>
    <button className="button thirdbutton">Click Me!</button>&ensp; &ensp;
     <span>Pressed State</span><br/><br/>
    <button className="button forthbutton">Click Me!</button> &ensp; &ensp;
    <span>Disabled State</span>  &ensp; &ensp;&ensp;
   </Card.Body>
   </Card>
   </label>
   </CardGroup>

   <label>
   <Card.Title className="titleclass" >TextBox</Card.Title>
   <Card className="textboxContainer" >
   <Card.Body>
   <div>Normal State</div>
     <input type="text" placeholder="Click Me!" className="textclass"/><br/><br/>
    <div>Focused State</div>
     <input type="text"  placeholder="Click Me!" className="textclass" autoFocus /> 
   </Card.Body>
   </Card>
   </label>
   </Card>
 </div>
  );
}
}
export default App;