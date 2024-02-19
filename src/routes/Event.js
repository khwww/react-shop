import { Outlet } from "react-router-dom";

function Event() {
  return (
    <div>
      <img src={require('../img/sale.jpg')} width="500px" />
      <h4><br/>10개 사면 10% 할인!</h4>
      <Outlet></Outlet>
    </div>
  )
}

export default Event;