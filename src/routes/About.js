import { Outlet } from "react-router-dom";

function About() {
  return (
    <div>
      <h4>우리 회사는..</h4>
      <Outlet></Outlet>
    </div>
  )
}

export default About;