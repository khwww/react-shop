import {Table} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { addCount, minCount, deleteCount } from './../store.js'
import '../App.css';

// tr넣으면 행 하나 생기고 th넣으면 열 하나 생김
function Cart(){

// useSelector는 Redux store에서 state가져와주는 함수
// let cart = useSelector((state)=>{ return state })
// 위의 식도 가능한데 아래처럼도 가능. return+중괄호는 생략가능(js문법)
let state = useSelector((state)=> state )
let dispatch = useDispatch()

  return (
    <div>
      <div className='cart-container'>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>상품명</th>
              <th>수량</th>
              <th>수량변경</th>
            </tr>
          </thead>
          <tbody>
            {
              state.cart.map((a,i)=>
                <tr key={i} className={i % 2 === 0 ? 'even-row' : 'odd-row'}>
                  <td>{state.cart[i].id}</td>
                  <td>{state.cart[i].name}</td>
                  <td>{state.cart[i].count}</td>
                  <button onClick={()=>{
                    dispatch(addCount(state.cart[i].id))
                  }}> + </button>
                  <button onClick={()=>{
                    dispatch(minCount(state.cart[i].id))
                  }}> - </button>
                  <button onClick={(e)=>{
                    dispatch(deleteCount(e.target.parentElement))
                  }}> 삭제 </button>
                </tr>
              )
            }
          </tbody>
        </Table> 
      </div>
      <button>주문...하겠어?</button>
      <button>계속 쇼핑하기</button>
    </div>
  )
}

export default Cart