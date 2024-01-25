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
            <Nav.Link href="#home">Porter</Nav.Link>
            <Nav.Link href="#products">Polo</Nav.Link>
            <Nav.Link href="#categories">Sweat</Nav.Link>
            <Nav.Link href="#cart">old-shoes</Nav.Link>
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
          {/* <Card bag={bag[1]} i={2}></Card> */}
          {
            bag.map((a, i)=>{
              return (
                <Card key={i} bag={bag[i]} i={i}></Card>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}
function Card(props){
  return (
    <div className='col-md-4'>
      <img src={require('./img/bag' + (props.i) + '.jpg')} width="80%" />
      <h4>{ props.bag.title }</h4>
      <p>{ props.bag.price }</p>
    </div>
  )
}

export default App;
