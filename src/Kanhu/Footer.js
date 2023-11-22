import React from 'react';
import './Footer.css'; // Make sure to import your CSS file
import { AiFillLinkedin,AiFillInstagram,AiOutlineGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="social-icon">
        <li className="social-icon__item">
          <a className="social-icon__link" href="https://www.linkedin.com/in/kanhu-pasayat-991b51266/">
            <AiFillLinkedin />
          </a>
          <a className="social-icon__link" href="https://www.instagram.com/kanhu_pasayat/">
            <AiFillInstagram />
          </a>
          <a className="social-icon__link" href="https://github.com/kanhupasayat">
            <AiOutlineGithub />
          </a>
        </li>
      </ul>
      <section>
	<h1 className="text-shadow">&copy;2023 Kanhu Pasayat | </h1>
	<div className="tags">
		<p className="text-shadow"><small>Mobile Number: +91 6370 997812</small></p>
	</div>
</section>
    </footer>
  );
};

export default Footer;

