import React from 'react'
import BgAbout from '../img/bg-about.jpg';
import './css/ImgCourse.css';

function ImgCourse() {
  return (
    <section>
        <div className="container-img">
            <img src={BgAbout} alt={BgAbout} />
        </div>
    </section>
  )
}

export default ImgCourse