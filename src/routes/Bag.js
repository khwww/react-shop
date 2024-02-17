import data from '../data/data.js';
import { useState } from "react";
import { useNavigate } from 'react-router-dom'

function Bag() {

  let [bag] = useState(data);

  return (
    <div>
      <div className="bag-bg"></div>
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
  )
}

function Card(props){
  let navigate = useNavigate();
  let handleClick = () => {
    // 이미지 클릭 시 해당 상품의 디테일 페이지로 이동
    navigate(`/detail/${props.i}`);
  };
  return (
    <div className='col-md-4'>
      <img onClick={handleClick} src={require('../img/bag' + (props.i) + '.jpg')} width="80%" />
      <h4 onClick={handleClick}>{ props.bag.title }</h4>
      <p onClick={handleClick}>{ props.bag.price }</p>
    </div>
  )
}

export default Bag;