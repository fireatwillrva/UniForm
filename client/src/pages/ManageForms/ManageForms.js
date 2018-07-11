import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import Button from "../../components/Button"
import 'react-select/dist/react-select.css';
import Jumbotron from "../../components/Jumbotron";
import FormManagerTable from "../../components/FormManagerTable";
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import './ManageForms.css';
class ManageForms extends Component {
 
  state = {
    templates: [],
    filled: [],
    filleds: [],
    templateOption: "", 
    name: "Manage Forms",
    link: ""
    
  }
  componentDidMount() {
    this.loadData();
   
  }
  loadData= () => {
    API.getTemplates()
      .then(res =>
        this.setState({ templates: res.data}),
      )
      .catch(err => console.log(err));
  };
  newForm = () => {
    window.location = `http://${window.location.host}/buildTemplate`
  }
  handleChange = (userOption) => {
    
    let link = `http://${window.location.host}/buildTemplate/${userOption.value}`
    this.setState({userOption: userOption, link: link})
    API.getFilledByTemplate(userOption.value)
      .then(res =>
        this.setState({ filleds: res.data}),
      )
      .catch(err => console.log(err));
    }
 onDelete = (id,templateId) => {
   let object = {
     value: templateId
   }
  API.deleteFilled(id)
  .then(res => this.handleChange(object) )
  .catch(err => console.log(err))
  }
  render() {
    const { userOption } = this.state;
    const userValue = userOption && userOption.value;
  return(
  <div>
    <Jumbotron name = {this.state.name} children = {this.state.name} />
    <Container fluid>
    {/* <Row>
      <Col size="md-12">
        <h2>My Forms</h2>
        <br></br>
      </Col>
    </Row> */}
    <Row>
      <Col size="md-12">
        <Button onClick = {this.newForm}>Create a New Form</Button>
      </Col>
    </Row>
      <hr></hr>
    <Row>
    <Col size = "md-12">
    <h3>My Forms</h3>
    <br></br>
    </Col>
    <Col size = "md-12">
      <p><i>Select an existing form to generate its link!</i></p>
      </Col>
      <Col size = "md-12">
        <Select
          name="form-field-name2"
          value={userValue}
          onChange={this.handleChange}
          options= {this.state.templates.map(template => (
            { value: template._id, label: template.templateName } 
        ))} style={{left: '55vh'}} placeholder="Select Form" /> 
        <br></br>
      </Col>
    </Row>
    <Row>
      <Col size="md-12">
      <p>Your form's URL: <br></br>{this.state.link}</p>  
      </Col>
      </Row>
      <Row>
      <Col size="md-12">
      <FormManagerTable 
      children = {this.state.filleds} onDelete = {this.onDelete}
      />
      </Col>
    </Row>
    <hr></hr>
  </Container>
  {/* Force footer to bootom */}
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  </div>
)}
}
export default ManageForms;