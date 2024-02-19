import { Outlet } from "react-router-dom";

function About() {
  return (
    <div>
      <img src={require('../img/samgak.jpg')} width="500px" />
      <h1>@samgak_vintage</h1>
      <h1>https://fruitsfamily.com/seller/380d</h1>
      <h4><br/>우리 회사는..100명의 직원으로 구성되어 있습니다. 믿어주세요.</h4>
      <Outlet></Outlet>
    </div>
  )
}
export default About;