import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Nav } from 'react-bootstrap'
import { func } from 'prop-types';

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

  let[탭, 탭변경] = useState(0)


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
        <Nav.Link onClick={()=>{ 탭변경(0) }} eventKey="link0">버튼0</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={()=>{ 탭변경(1) }} eventKey="link1">버튼1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={()=>{ 탭변경(2) }} eventKey="link2">버튼2</Nav.Link>
      </Nav.Item>
    </Nav>

    <TapContent 탭={탭}/>

  </div> 
  )


}

function TapContent(props) {
  if(props.탭 == 0){
    return <div>
      포터(PORTER)는 1935년 가방 장인인 요시다 기치조가 설립한 요시다 컴퍼니에서 1962년 발표한 자체 브랜드로<br/>
“바늘 한 땀 한 땀에 영혼을 담는다”라는 ‘일침입혼(一針入魂)’의 장인 정신을 바탕으로 하고 있습니다.<br/>
현대적인 디자인에 뛰어난 기술력과 기능성, 사용하면 할수록 감탄을 더하게 하는 내구성과 실용성을 모두 겸비한 가방 브랜드로 잘 알려져 있습니다.<br/>
여러 브랜드와의 컬래버레이션을 통해서 다채로운 행보를 이어가고 있으며 무엇보다도 물건을 운반하는 도구라는 가방의 기본적인 본질을 우선으로 하여<br/>
모든 제작 과정에 숙련된 장인들의 눈과 손을 거쳐 탄생합니다.
포터(PORTER)는 1935년 가방 장인인 요시다 기치조가 설립한 요시다 컴퍼니에서 1962년 발표한 자체 브랜드로<br/>
“바늘 한 땀 한 땀에 영혼을 담는다”라는 ‘일침입혼(一針入魂)’의 장인 정신을 바탕으로 하고 있습니다.<br/>
현대적인 디자인에 뛰어난 기술력과 기능성, 사용하면 할수록 감탄을 더하게 하는 내구성과 실용성을 모두 겸비한 가방 브랜드로 잘 알려져 있습니다.<br/>
여러 브랜드와의 컬래버레이션을 통해서 다채로운 행보를 이어가고 있으며 무엇보다도 물건을 운반하는 도구라는 가방의 기본적인 본질을 우선으로 하여<br/>
모든 제작 과정에 숙련된 장인들의 눈과 손을 거쳐 탄생합니다.
포터(PORTER)는 1935년 가방 장인인 요시다 기치조가 설립한 요시다 컴퍼니에서 1962년 발표한 자체 브랜드로<br/>
“바늘 한 땀 한 땀에 영혼을 담는다”라는 ‘일침입혼(一針入魂)’의 장인 정신을 바탕으로 하고 있습니다.<br/>
현대적인 디자인에 뛰어난 기술력과 기능성, 사용하면 할수록 감탄을 더하게 하는 내구성과 실용성을 모두 겸비한 가방 브랜드로 잘 알려져 있습니다.<br/>
여러 브랜드와의 컬래버레이션을 통해서 다채로운 행보를 이어가고 있으며 무엇보다도 물건을 운반하는 도구라는 가방의 기본적인 본질을 우선으로 하여<br/>
모든 제작 과정에 숙련된 장인들의 눈과 손을 거쳐 탄생합니다.
    </div>
  }
  else if(props.탭 == 1){
    return <div>이 가방 실물이 더 이뻐요. 저는 거짓말을 하지 않습니다. i'm so sorry but i love you.</div>
  }
  else if(props.탭 == 2){
    return <div>이 가방 팔아도 남는 게 없습니다. 진짜에요. 저 그냥 자선사업가라고 보시면 됩니다. i'm so sorry but i love you.</div>
  }
}

export default Detail;