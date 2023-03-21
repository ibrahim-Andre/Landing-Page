import React from "react";
import {
  Animator,
  batch,
  Fade,
  FadeIn,
  MoveIn,
  MoveOut,
  ScrollContainer,
  ScrollPage,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";
import headerImg from "../../img/header2-img.jpeg";
import projectOne from "../../img/project1.jpeg";
import projectTwo from "../../img/project2.jpg";
import projectThree from "../../img/project3.jpeg";
import bio from "../../img/header2-img.jpg";
import "../Home/style.css";
import { FiMail } from "react-icons/fi";
import { SiInstagram } from "react-icons/si";
import { FiGithub } from "react-icons/fi";

const Home = () => {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const work = [
    {
      name: "Project 1",
      link: "#",
      imageSrc: projectOne,
    },
    {
      name: "Project 2",
      link: "#",
      imageSrc: projectTwo,
    },
    {
      name: "Project 3",
      link: "#",
      imageSrc: projectThree,
    },
  ];
  const handleContactClick = (url) => {
    const fons = window.open(url, "_blank");
    fons.focus();
  };
  return (
    <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <div className="image-container">
            <img src={headerImg} alt="header image" />
          </div>
        </Animator>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(1000, 0))}>
          <div className="name">
            <h2 className="first">ibrahim</h2>
          </div>
        </Animator>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(-1650, 0))}>
          <div className="name">
            <h2 className="last">Tanriover</h2>
          </div>
        </Animator>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(-100, 100))}>
          <div className="position">
            <div></div>
            <h2 className="last">FrontEnd Developer</h2>
          </div>
        </Animator>
      </ScrollPage>
      <ScrollPage page={1}>
        <Animator animation={ZoomInScrollOut}>
          <div className="section-title">Landing Page</div>
        </Animator>
      </ScrollPage>
      <ScrollPage page={2}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <div className="landing-content">
            {work?.map((work, index) => {
              return (
                <a href={work?.link} target="_blank" key={work?.name}>
                  <div className="landing-card">
                    <div className="project-image">
                      <img src={work?.imageSrc} alt={work?.name} />
                    </div>
                    <div className="landing-title">
                      <h3>{work?.name}</h3>
                    </div>
                    <div className="count">{index}</div>
                  </div>
                </a>
              );
            })}
          </div>
        </Animator>
      </ScrollPage>
      <ScrollPage page={3}>
        <Animator animation={ZoomInScrollOut}>
          <div className="section-title about-me">About Me</div>
        </Animator>
      </ScrollPage>
      <ScrollPage page={4}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(-1000, -400))}>
          <div className="background-image-container">
            <img src={bio} alt="my picture" />
            <div className="black-background"></div>
          </div>
        </Animator>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(1000, 500))}>
          <div className="datails">
            <h2 className="gretting">Hello</h2>
            <p className="bio">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et ipsam
              est nostrum! A necessitatibus nihil iusto dolorem fugiat minima
              error ipsa! Ipsum incidunt voluptate saepe eius dignissimos
              debitis velit mollitia ducimus. Corrupti minus ratione molestias
              neque doloremque repellat saepe, libero necessitatibus atque,
              officiis tempore maiores enim quam ducimus perferendis! Adipisci.
            </p>
            <p className="bio">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et ipsam
              est nostrum! A necessitatibus nihil iusto dolorem fugiat minima
              error ipsa! Ipsum incidunt voluptate saepe eius dignissimos
              debitis velit mollitia ducimus. Corrupti minus ratione molestias
              neque doloremque repellat saepe, libero necessitatibus atque,
              officiis tempore maiores enim quam ducimus perferendis! Adipisci.
            </p>
            <div className="bio">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et ipsam
              est nostrum! A necessitatibus nihil iusto dolorem fugiat minima
              error ipsa! Ipsum incidunt voluptate saepe eius dignissimos
              debitis velit mollitia ducimus. Corrupti minus ratione molestias
              neque doloremque repellat saepe, libero necessitatibus atque,
              officiis tempore maiores enim quam ducimus perferendis! Adipisci.
            </div>
          </div>
        </Animator>
      </ScrollPage>
      <ScrollPage page={5}>
        <Animator animation={ZoomInScrollOut}>
          <div className="section-title contact">Contact</div>
        </Animator>
      </ScrollPage>
      <ScrollPage page={6}>
        <div className="lastpage">
          <span style={{ fontSize: "40px" }}>
            <Animator animation={MoveIn(-1000, 0)}>
              <div
                className="children"
                onClick={() => handleContactClick("https://www.instagram.com")}>
                <SiInstagram color="white" className="contact-list-icon">
                  <p>Instagram</p>
                </SiInstagram>
              </div>
            </Animator>
            <Animator animation={MoveIn(1000, 0)}>
              <div
                className="children"
                onClick={() => handleContactClick("https://mail.google.com/")}>
                <FiMail color="white" className="contact-list-icon">
                  <p>Mail</p>
                </FiMail>
              </div>
            </Animator>
            <Animator animation={MoveOut(1000, 0)}>
              <div
                className="children"
                onClick={() => handleContactClick("https://github.com/")}>
                <FiGithub color="white" className="contact-list-icon">
                  <p>Github</p>
                </FiGithub>
              </div>
            </Animator>
          </span>
        </div>
      </ScrollPage>
    </ScrollContainer>
  );
};

export default Home;
