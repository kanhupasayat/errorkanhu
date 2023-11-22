import React, { useEffect, useState } from "react";
import "./Project.css";
import video1 from "./video1.mp4";
import video2 from "./video2.mp4";
import video3 from "./video3.mp4";
import video4 from "./video4.mp4";
import video5 from "./video5.mp4";
import video6 from "./video6.mp4";

const Project = () => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    consoleText(["Hello World.", "My Project", "Made with Love."], "text", [
      "tomato",
      "chartreuse",
      "lightblue",
    ]);

    function consoleText(words, id, colors) {
      if (colors === undefined) colors = ["#fff"];
      var visible = true;
      var con = document.getElementById("console");
      var letterCount = 1;
      var x = 1;
      var waiting = false;
      var target = document.getElementById(id);
      target.setAttribute("style", "color:" + colors[0]);
      window.setInterval(function () {
        if (letterCount === 0 && waiting === false) {
          waiting = true;
          target.innerHTML = words[0].substring(0, letterCount);
          window.setTimeout(function () {
            var usedColor = colors.shift();
            colors.push(usedColor);
            var usedWord = words.shift();
            words.push(usedWord);
            x = 1;
            target.setAttribute("style", "color:" + colors[0]);
            letterCount += x;
            waiting = false;
          }, 1000);
        } else if (letterCount === words[0].length + 1 && waiting === false) {
          waiting = true;
          window.setTimeout(function () {
            x = -1;
            letterCount += x;
            waiting = false;
          }, 1000);
        } else if (waiting === false) {
          target.innerHTML = words[0].substring(0, letterCount);
          letterCount += x;
        }
      }, 120);
      window.setInterval(function () {
        if (visible === true) {
          con.className = "console-underscore hidden";
          visible = false;
        } else {
          con.className = "console-underscore";
          visible = true;
        }
      }, 400);
    }
  }, []);

  return (
    <>
      <div className="about">
        <div className="console-container">
          <span id="text"></span>
          <div className="console-underscore" id="console">
            &#95;
          </div>
        </div>
      </div>

      <div class="container">
        <div
          class="card"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div class="face face1">
            <div class="content1">
              <video
                className="pimg"
                controls
                autoPlay
                muted
                loop
                src={video1}
              ></video>
            </div>
          </div>
          <div class="face face2">
            <div class="content1">
              <p>
                {" "}
                "Building 'Student Practice Session,' a dynamic full-stack
                using HTML, CSS, JavaScript, React, Django,
                Python, and SQL3."
              </p>
              <div className="box11">
                <a
                  href="https://github.com/kanhupasayat/pythonproject01"
                  type="button"
                >
                  github link
                </a>
                <a
                  href="https://kanhupasayat.pythonanywhere.com/"
                  type="button"
                >
                  DEMO
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="face face1">
            <div class="content1">
              <video
                className="pimg"
                controls
                autoPlay
                muted
                loop
                src={video2}
              ></video>
            </div>
          </div>
          <div class="face face2">
            <div class="content1">
              <p> NetFlix clon using React js</p>
              <div className="box11">
                <a
                  href="https://github.com/kanhupasayat/netflix.kp"
                  type="button"
                >
                  github link
                </a>
                <a href="#" type="button">
                  DEMO
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="face face1">
            <div class="content1">
              <video
                className="pimg"
                controls
                autoPlay
                muted
                loop
                src={video3}
              ></video>
            </div>
          </div>
          <div class="face face2">
            <div class="content1">
              <p>E-commerce wepsite using REACT</p>
              <div className="box11">
                <a
                  href="https://github.com/kanhupasayat/E-commerce-KP-RC"
                  type="button"
                >
                  github link
                </a>
                <a href="#" type="button">
                  DEMO
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="face face1">
            <div class="content1">
              <video
                className="pimg"
                controls
                autoPlay
                muted
                loop
                src={video4}
              ></video>
            </div>
          </div>
          <div class="face face2">
            <div class="content1">
              <p>
                {" "}
                E-Library development by using HTML, CSS , JAVASCRIPT,REACT
              </p>
              <div className="box11">
                <a
                  href="https://github.com/kanhupasayat/showbook/tree/main"
                  type="button"
                >
                  gitgub link
                </a>
                <a href="#" type="button">
                  DEMO
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="face face1">
            <div class="content1">
              <video
                className="pimg"
                controls
                autoPlay
                muted
                loop
                src={video5}
              ></video>
            </div>
          </div>
          <div class="face face2">
            <div class="content1">
              <p> E-commerce wepsite -shoping site using HTML,CSS JAVASCRIPT</p>
              <div className="box11">
                <a
                  href="https://github.com/kanhupasayat/E-commerce-weppage/tree/main/project6%20-%20Copy"
                  type="button"
                >
                  gitgub link
                </a>
                <a href="#" type="button">
                  DEMO
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="face face1">
            <div class="content1">
            <video
                className="pimg"
                controls
                autoPlay
                muted
                loop
                src={video6}
              ></video>
              
              
            </div>
          </div>
          <div class="face face2">
            <div class="content1">
              <p> You Tub clon using REACT</p>
              <div className="box11">
                <a
                  href="https://github.com/kanhupasayat/youtubclone.kp"
                  type="button"
                >
                  github link
                </a>
                <a href="#" type="button">
                  DEMO
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="face face1">
            <div class="content1">
              <img
                className="pimg"
                src="https://img.freepik.com/free-vector/abstract-coming-soon-halftone-style-background-design_1017-27282.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1700092800&semt=ais"
                alt=""
              />
            </div>
          </div>
          <div class="face face2">
            <div class="content1">
              <p> coming Soon project.....</p>
              <div className="box11">
                <a href="#" type="button">
                  Read More
                </a>
                <a href="#" type="button">
                  DEMO
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
