import {Table} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { addCount } from './../store.js'


// tr넣으면 행 하나 생기고 th넣으면 열 하나 생김
function Cart(){

// useSelector는 Redux store에서 state가져와주는 함수
// let cart = useSelector((state)=>{ return state })
// 위의 식도 가능한데 아래처럼도 가능. return+중괄호는 생략가능(js문법)
let state = useSelector((state)=> state )
let dispatch = useDispatch()

  return (
    <div>
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
              <tr key={i}>
                <td>{state.cart[i].id}</td>
                <td>{state.cart[i].name}</td>
                <td>{state.cart[i].count}</td>
                <td>
                  <button onClick={()=>{
                    dispatch(addCount(state.cart[i].id))
                  }}>+</button>
                </td>
              </tr>
            )
          }
        </tbody>
      </Table> 
    </div>
  )
}

export default Cart