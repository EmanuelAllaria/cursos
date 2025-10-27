import React from "react";
import ImgCourse from "./img/bg-course.jpg";
import ImgAbout from "./img/bg-about.jpg";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Section from "./components/Section";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function Home() {
  return (
    <>
      <Header page="home" />
      <Banner />
      <Section type={"about"} img={ImgAbout} />
      <iframe
        className="Video-About"
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/RAFpHtv9isA"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <Section type={"course"} img={ImgCourse} />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
