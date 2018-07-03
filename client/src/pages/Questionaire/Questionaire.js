import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/InputField";
import Jumbotron from "../../components/Jumbotron";

class Questionaire extends Component {
  state = {
    username: "",
    firstName: "", 
    name: "Questionnaire"
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.email && this.state.firstName ) {
      API.saveUser({
        email: this.state.email,
        firstName: this.state.firstName
      })
        .then(alert("User Saved"))
        .catch(err => console.log(err));
    }
  };
  render() {
  return(
  <div>
  <Jumbotron name = {this.state.name} children = {this.state.name} />
  <Container fluid>
    <Row>
      <Col size="md-12">
       
          <form>
            <center>
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="email (required)"
              />
              <Input
                value={this.state.firstName}
                onChange={this.handleInputChange}
                name="firstName"
                placeholder="First Name(required)"
              />
              <center><FormBtn
                disabled={!(this.state.email && this.state.firstName)}
                onClick={this.handleFormSubmit}
              >
                Submit  
              </FormBtn></center>
              </center>
            </form>
          
        
      </Col>
    </Row>
  </Container>
  </div>
)}
}
export default Questionaire;
