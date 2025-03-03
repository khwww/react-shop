import React from "react";
import "../App.css";

function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="company-info">
        <br />
        <span>
          Company Name: 삼각(samgak) | Owner: 김현우 | Personal Info Manager:
          김피티 | Email:
          <a href="mailto:woowoo982@naver.com" rel="noopener noreferrer">
            {" "}
            samgak@naver.com
          </a>
          <br />
          Address: Kyungpook National Univ., Sangyeok 3(sam)-dong, Buk-gu,
          Daegu, Republic of Korea | Business Registration Number: 111-22-33333
          | Business License: 2024-대구북구-1234호 | Hosting by xxxx
        </span>
      </div>
    </footer>
  );
}

export default Footer;
