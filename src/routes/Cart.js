import {Table} from 'react-bootstrap'

// tr넣으면 행 하나 생기고 th넣으면 열 하나 생김
function Cart(){
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>안녕</td>
            <td>안녕</td>
            <td>안녕</td>
          </tr>
          <tr>
            <td>2</td>
            <td>안녕2</td>
            <td>안녕2</td>
            <td>안녕2</td>
          </tr>
          <tr>
            <td>3</td>
            <td>안녕3</td>
            <td>안녕3</td>
            <td>안녕3</td>
          </tr>
        </tbody>
      </Table> 
    </div>
  )
}

export default Cart