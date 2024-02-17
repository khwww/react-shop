import { Outlet } from "react-router-dom";

function Event() {
  return (
    <div>
      <h4>진행중인 이벤트가 없습니다.</h4>
      <Outlet></Outlet>
    </div>
  )
}

export default Event;