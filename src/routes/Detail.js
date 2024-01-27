import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Nav } from 'react-bootstrap'

// 이거 styeld component
// let YelloBtn = styled.button`
//   background : yellow;
//   color : black;
//   padding : 10px;
// `


function Detail(props) {

  // 유저가 URL파라미터에 입력한거를 가져와주는 useParams라는 훅이 있음
  let {id} = useParams();
  let 찾은상품 = props.bag.find(function(x){
    return x.id == id
  });

  if(!id) {
    return <div>기본 디테일 페이지 입니다?</div>
  }

  if(!찾은상품) {
    return <div>상품을 찾을 수 없습니다.</div>
  }


  
  return (
    <div className="container">
        {/* <YelloBtn>버튼</YelloBtn> 이거는 styeld components */}

    <div className="row">
      <div className="col-md-6">
        <img src={require('../img/bag' + id + '.jpg')} width="100%" />
      </div>
      <div className="col-md-6">
        <h4 className="pt-5">{ 찾은상품.title }</h4>
        <p>{ 찾은상품.content }</p>
        <p>{ 찾은상품.price}원</p>
        <button className="btn btn-danger">주문하기</button> 
      </div>
    </div>

    {/* defaultActiveKey는 페이지에 들어갔을 때 기본적으로 선택되어 있을 탭을 의미 */}
    <Nav variant="tabs" defaultActiveKey="link0">
      <Nav.Item>
        <Nav.Link eventKey="link0">버튼0</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link1">버튼1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link2">버튼2</Nav.Link>
      </Nav.Item>
    </Nav>
    <div>내용0</div>
    <div>내용1</div>
    <div>내용2</div>




  </div> 
  )

}

export default Detail;