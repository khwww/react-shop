import walletdata from '../data/wallet.js';
import { useState } from "react";
import { useNavigate } from 'react-router-dom'

function Wallet() {

  let [wallet] = useState(walletdata);

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
      <img onClick={handleClick} src={require('../img/wallet' + (props.i) + '.jpg')} width="80%" />
      <h4 onClick={handleClick}>{ props.wallet.title }</h4>
      <p onClick={handleClick}>{ props.wallet.price }</p>
    </div>
  )
}

export default Bag;