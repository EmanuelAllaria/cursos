import React from 'react';
import Header from './components/Header';
import ImgCourse from './components/ImgCourse';
import AboutCourse from './components/AboutCourse';
import StoreCourse from './components/store/StoreCourse';
import Footer from './components/Footer';

function Curso() {
  return (
    <>
        <Header page="course"/>
        <br />
        <ImgCourse/>
        <br />
        <div
          // style={{
          //   display:"flex",
          //   alignItems:"center",
          //   justifyContent:"center",
          // }}
          className="containerCourse"
        >
          <AboutCourse/>
          <br />
          <StoreCourse/>
        </div>
        <br />
        <Footer/>
    </>
  )
}

export default Curso