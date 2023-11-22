import React from "react";
import "./Home.css";
import Img1 from "./Img1.jpg";

const Home = () => {
  return (
    <>
      <div className="background canvas">
        <div className="image-container">
          <img
            className="image  vert-move"
            src={Img1}
            alt="Nature background"
          />
        </div>

        {/* <div className="avatar">
			<img className="imge" src={Img} alt="Skytsunami" />
	</div> */}
        <div className="text-container">
          <div class="container1">
            <p className="pp">Hello 👋 I'm</p>
            <section class="animation">
              <div class="first  vert-move">
                <div>Kanhu pasayat</div>
              </div>
              <div class="second  vert-move">
                <div>Python full stack Developer</div>
              </div>
            </section>
          </div>
          <p className="description">
            I am hardworking with smart work and always energetic and eager to
            learn new skills. Also i am dependable person who is great at time
            management. Furthermore, I am adept at handling multiple tasks on
            daily basis. I want to use my knowledge for the growth of
            organisation and myself also.
          </p>
          <button className="btn rounded">
            <a className="a" href="/About">
              <span className="text-green">more about Me</span>
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
