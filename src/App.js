import {Button, Navbar, Container, Nav, Form, FormControl} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSearch } from 'react-icons/fa';
import './App.css';
import data from './data.js';
import { useState } from "react";

function App(){
  let [bag] = useState(data);
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container className="justify-content-between">
        <Navbar.Brand href="#home">Samgak Store</Navbar.Brand>
    
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#categories">Categories</Nav.Link>
            <Nav.Link href="#cart">Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>    
        <Form inline className="mx-auto">
          <Button variant="outline-light"><FaSearch /></Button>
        </Form>
      </Container>
      </Navbar>
      
      <div className="main-bg"></div>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
          <img src={require("./img/bag1.jpg")} width="80%" />
            <h4>{ bag[0].title }</h4>
            <p>{ bag[0].price }</p>
          </div>
          <div className="col-md-4">
          <img src={require("./img/bag1.jpg")} width="80%" />
            <h4>{ bag[1].title }</h4>
            <p>{ bag[1].price }</p>
          </div>
          <div className="col-md-4">
          <img src={require("./img/bag1.jpg")} width="80%" />
            <h4>{ bag[2].title }</h4>
            <p>{ bag[2].price }</p>
          </div>
          <div className="col-md-4">
          <img src={require("./img/bag1.jpg")} width="80%" />
            <h4>{ bag[3].title }</h4>
            <p>{ bag[3].price }</p>
          </div>
          <div className="col-md-4">
          <img src={require("./img/bag1.jpg")} width="80%" />
            <h4>{ bag[4].title }</h4>
            <p>{ bag[4].price }</p>
          </div>
          <div className="col-md-4">
          <img src={require("./img/bag1.jpg")} width="80%" />
            <h4>{ bag[5].title }</h4>
            <p>{ bag[5].price }</p>
          </div>
        </div>
      </div>
      


    </div>
  );
}

export default App;
