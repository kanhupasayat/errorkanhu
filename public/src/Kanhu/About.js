import React, { useEffect } from "react";
import "./About.css";
import Htt from "./Htt.png";
import css from "./css.png";
import js from "./js.png";
import Re from "./Re.png";
import Boot from "./Boot.png";
import Django from "./Django.png";
import Python from "./Python.png";
import Database from "./Database.png";
import img from "./Img.jpg"

const About = () => {
  useEffect(() => {
    const spans = document.querySelectorAll(".word span");

    spans.forEach((span, idx) => {
      span.addEventListener("click", (e) => {
        e.target.classList.add("active");
      });
      span.addEventListener("animationend", (e) => {
        e.target.classList.remove("active");
      });

      // Initial animation
      setTimeout(() => {
        span.classList.add("active");
      }, 750 * (idx + 1));
    });
  }, []);

  return (
    <div className="ab">
    
    <div className="about1">
      <div className="word1">
        <div className="word">
          <span>A</span>
          <span>B</span>
          <span>O</span>
          <span>U</span>
          <span>T</span>
        </div>
      </div>
       <div className="d11">
      <p className="p1">PERSONAL INFOS</p>
      <div className='avatar'>
    <img  className="imgkk  vert-move" src={img}/>
  </div>
  <div className='username'>
  <h3 className="pp">KANHU PASAYAT</h3>
  </div>
  </div>
      <div className="box5">
        <div className="box4">
          <ul>
            <li>
              First Name: <span>Kanhu</span>
            </li>
            <li>
              Last Name: <span>Pasayat</span>
            </li>
            <li>
              Age:<span>24 Years</span>
            </li>
            <li>
              Nationality: <span>Indian</span>
            </li>
            <li>
              Gender: <span>Male</span>
            </li>
            <li>
              Address: <span>Odisha</span>
            </li>
            <li>
              Phone: <span>+916370997812</span>
            </li>
            <li>
              Email: <span>iamkanhu7752@gmail.com</span>
            </li>
            <li>
              Langages: <span>English,Hindi,Odia</span>
            </li>
            <li>
              D O B: <span>24/08/1998</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="p11">
        <button className="btn rounded">
          <a
            className="a"
            href="https://drive.google.com/file/d/1WQxY9jE90lC41Zk-anrj5wMfw9ndKznf/view?usp=drivesdk"
          >
            <span className="text-green">Download CV</span>
          </a>
        </button>
      </div>
      <div className="card1">

      <div className="box20">
      <h1  className="hq">Front-End</h1>
      <img className="logo12 vert-move" src={Htt} alt="" />
      <img className="logo12 vert-move" src={css} alt="" />
      <img className="logo12 vert-move" src={js} alt="" />
      <img  className="logo12 vert-move" src={Re} alt="" />
      <img className="logo12 vert-move" src={Boot} alt="" />
      </div>

      <div className="box20">
      <h1  className="hq">Back-end</h1>
      <img className="logo12 vert-move" src={Django} alt="" />
      <img className="logo12 vert-move" src={Python} alt="" />
      <img className="logo12 vert-move" src={Database} alt="" />
      </div>
      </div>
      </div> 
      {/* <table className="rwd-table">
  <tr>
    <th>
      EDUCATION</th>
    <th>COLLEGE</th>

    <th> STREAM</th>
    <th>Year</th>
  </tr>
  <br />
  <tr>
    <td className="Movie Title">Bachelors in technology</td>
    <td className="Genre">GANDHI INSTITUTE FOR EDUCATION & TECHNOLOGY (GIET)(B- TECH)</td>
    <td className="Year">MECHANICAL ENGINEERING</td>
    <td className="Gross">04/2020 - 04/2023,</td>
  </tr>
  <br />
  <tr>
    <td className="Movie Title">Bachelors in technology</td>
    <td className="Genre">GANDHI INSTITUTE FOR EDUCATION & TECHNOLOGY(GIET)(DIPLOMA)</td>
    <td className="Year">MECHANICAL ENGINEERING</td>
    <td className="Gross">2020</td>
  </tr>
  <br />
  <tr>
    <td className="Movie Title">Higher Secondary Examination</td>
    <td className="Genre">Rourkela Inst Of Technology</td>
    <td className="Year">+2 SCIENCE</td>
    <td className="Gross">2016</td>
  </tr>
  <br />
  <tr>
    <td className="Movie Title">High school certficate examination</td>
    <td className="Genre">ADARSHA VIDYAMANDIR ,ROURKELA</td>
    <td className="Year">	10TH</td>
    <td className="Gross">2014</td>
  </tr>
</table> */}
      

      <div className="ac">
        <h1 className="pp">ACHIEVEMENTS</h1>
        <p className="pp xx"> First Place in University Coding Competition (2022) Developed an algorithm to solve a complex
problem within the given time frame, leading to the highest score among all participants. Utilized
efficient data structures and optimized code for performance. Demonstrated strong problemsolving
skills and the ability to work under pressure.</p>
<br />
<p className="pp xx">LeetCode - The World's Leading Online Programming (3 star) and leetcode rank(288,032)</p>
      </div>



      
</div>





          
      
  );
};

export default About;
