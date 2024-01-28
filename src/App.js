import {Button, Navbar, Container, Nav, Form, FormControl} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSearch } from 'react-icons/fa';
import './App.css';
import data from './data.js';
import Detail from './routes/Detail.js';
import About from './routes/About.js';
import Event from './routes/Event.js';
import { useState } from "react";
import { useEffect } from 'react';
//라우터 라이브러리 사용을 위한 import
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Cart from './routes/Cart.js'

function App(){
  let [bag] = useState(data);
  let navigate = useNavigate();
  // 이런식으로 useNavigate안에 들어가 있는 함수를 변수에 넣어서 사용 - 인주로 준 경로로 페이지를 이동시켜주는 함수
  // 인자에 1넣으면 한 페이지 앞으로 가고, -2넣으면 두 페이지 이전으로 가줌 - 윈도우 뒤로가기, 앞으로가기 버튼과 same

  let [alert, setAlert] = useState(true)
  useEffect(()=>{
    let a = setTimeout(()=>{setAlert(false)}, 5000)
    return ()=>{
      clearTimeout(a)
    }
  }, [])

  return ( 
    <div className="App">
      {
        alert == true ? <div className='alert alert-warning'>
        Welcome to Samgak Store!
        </div>
        : null  
      }

      <Navbar bg="dark" variant="dark" expand="lg">
        <Container className="justify-content-between">
        <Navbar.Brand href="#home">Samgak Store</Navbar.Brand>
    
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {/* 페이지 이동 버튼은 link태그-import해와야됨 */}
            {/* <Link to="/">홈</Link>
            <Link to="/detail">상세페이지</Link> */}
            <Nav.Link onClick={()=>{ navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('./detail') }} >Detail</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('./about') }}>About</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('./event') }}>Event</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('./cart') }}>Cart</Nav.Link>

          </Nav>
        </Navbar.Collapse>    
        <Form inline className="mx-auto">
          <Button variant="outline-light"><FaSearch /></Button>
        </Form>
      </Container>
      </Navbar>

      

      {/* Route하나가 페이지 하나임 */}
      <Routes>
      <Route path="/" element={<div>
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
      </div>} />
        <Route path="/detail" element={<Detail bag={bag}/>} />
        
        <Route path ="*" element={<div>없는페이지야! 바보..(aka. 404 page)</div>}></Route>

        <Route path="/about" element={<About/>}>
          <Route path="member" element={<div>멤버임</div>}/>
          <Route path="location" element={<div>위치임</div>}/>
        </Route>

        <Route path="/event" element={<Event/>}>
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>}/>
          <Route path="two" element={<p>생일기념 쿠폰받기</p>}/>
        </Route>

        <Route path="/detail/:id" element={ <Detail bag={bag}/> }/>

        <Route path='/cart'element={<Cart/>}/>

      </Routes>
      
      

    </div>
  );
}
function Card(props){
  let navigate = useNavigate();
  let handleClick = () => {
    // 이미지 클릭 시 해당 상품의 디테일 페이지로 이동
    navigate(`/detail/${props.i}`);
  };
  return (
    <div className='col-md-4'>
      <img onClick={handleClick} src={require('./img/bag' + (props.i) + '.jpg')} width="80%" />
      <h4 onClick={handleClick}>{ props.bag.title }</h4>
      <p onClick={handleClick}>{ props.bag.price }</p>
    </div>
  )
}

export default App;
