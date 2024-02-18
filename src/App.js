import {Button, Navbar, Container, Nav, Form, FormControl} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSearch } from 'react-icons/fa';
import './App.css';
import data from './data/data.js';
import About from './routes/About.js';
import Event from './routes/Event.js';
import Bag from './routes/Bag.js';
import Mainsilde from './routes/Mainsilde.js';
import { useState } from "react";
import { useEffect } from 'react';
import { lazy, Suspense } from 'react';
//라우터 라이브러리 사용을 위한 import
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'

// import Detail from './routes/Detail.js';
// import Cart from './routes/Cart.js'

const Detail = lazy(()=> import('./routes/Detail.js'));
const Cart = lazy(()=> import('./routes/Cart.js'));

function App(){

  useEffect(() => {
    // 이미 'watched' 항목이 있는지 확인, 이러면 새로고침해도 값 남아있음.
    const watchedItems = localStorage.getItem('watched');
    if (!watchedItems) {
      // watchedItems가 존재하지 않으면 새로운 watched 아이템을 생성
      localStorage.setItem('watched', JSON.stringify([]));
    }
  }, []);
  let get_local = JSON.parse(localStorage.getItem('watched'));

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
        Welcome to Samgak Store!<br/> 
        All products sold in our store are used.
        </div>
        : null  
      }

      <Navbar bg="dark" variant="dark" expand="lg">
        <Container className="justify-content-between">
        <Navbar.Brand onClick={()=>{ navigate('/') }} href="#home">Samgak Store</Navbar.Brand>
    
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {/* 페이지 이동 버튼은 link태그-import해와야됨 */}
            {/* <Link to="/">홈</Link>
            <Link to="/detail">상세페이지</Link> */}
            {/* <Nav.Link onClick={()=>{ navigate('/') }}>Home</Nav.Link> */}
            {/* <Nav.Link onClick={()=>{ navigate('./detail') }} >Detail</Nav.Link> */}
            <Nav.Link onClick={()=>{ navigate('./bag') }}>Bag</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('./wallet') }}>Wallet</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('./Sweat') }}>Sweat</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('./Acc') }}>Acc</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('./about') }}>About Us</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('./event') }}>Event</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('./cart') }}>Cart</Nav.Link>

          </Nav>
        </Navbar.Collapse>    
        <Form inline className="mx-auto">
          <Button variant="outline-light"><FaSearch /></Button>
        </Form>
      </Container>
      </Navbar>

      {/*최근 본 상품 구현 부*/}
      <div className="cart-box">
        <p>최근 본 상품</p>
        {get_local !== null ? (
          get_local.map((item, index) => (
            <p key={index} className="get-local">{item}</p>
          ))
        ) : null}
      </div>
      {/*최근 본 상품 구현 부*/}

      
      <Suspense fallback={<div>로딩중임</div>}>
      {/* Route하나가 페이지 하나임 */}
      <Routes>
      <Route path="/"
      element={
      <div>
        <Mainsilde/>
      </div>}
      />
        <Route path="/bag" element={<Bag/>} />
      
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

        <Route path="/detail/:id" element={ 
            <Detail bag={bag}/>
        }/>    

        <Route path='/cart'element={<Cart/>}/>

      </Routes>

      </Suspense>
      
      <footer className='footer' role="contentinfo"> 
        <div className="company-info">
          <br/>
          <span>Company Name: 삼각(samgak) | Owner: 김현우 | Personal Info Manager: 김피티 | Email:<a href='mailto:woowoo982@naver.com' rel="noopener noreferrer"> samgak@naver.com</a><br/>Address: Kyungpook National Univ., Sangyeok 3(sam)-dong, Buk-gu, Daegu, Republic of Korea | Business Registration Number: 111-22-33333 | Business License: 2024-대구북구-1234호 | Hosting by xxxx</span>
        </div>
      </footer>
      

    </div>
  );
}


export default App;
