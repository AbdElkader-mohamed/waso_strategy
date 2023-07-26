import React, { Component } from 'react'

import img1 from '../asstes/images/hero/hero1.jpg';
import img2 from '../asstes/images/hero/hero2.jpg';

export default class Hero extends Component {
  render() {
    return (
      <section className="hero" >
      <div className="container-fluid p-0 h-100">
        <div id="carouselHero" className="carousel carousel-fade carousel-hero slide h-100" data-bs-ride="carousel">
          <div className="carousel-inner carousel-hero__inner h-100">
            <div className="carousel-item active h-100" data-bs-interval="10000">
              <img src={img1} className="d-block carousel__img" alt="hero1"/>
              <div className="container position-relative">
                <div className="carousel-caption carousel-content d-none d-md-block">
                  <p>SUPPORTING NEW PROJECT <span className="warning-text">01/05</span></p>
                  <h1>Strategic Planning <br/> for your <span className="warning-text">next project</span></h1>
                  <div className="d-flex align-items-center" >
                    <a href="#about" className="btn main-btn main-btn--danger"> Explore capabilities </a>
                    <a href="https://www.youtube.com/embed/TAxLYCsqnsU" className=" popup-youtube btn main-btn main-btn--fill"> <i className="bi bi-play"></i> </a>
                  </div>
              </div>
              </div>
            </div>
            <div className="carousel-item h-100" data-bs-interval="1000">
              <img src={img2} className="d-block carousel__img" alt="hero2"/>
              <div className="container position-relative">
                <div className="carousel-caption carousel-content d-none d-md-block">
                  <p>INTRODUCING WASO STRATEGY <span className="warning-text">01/05</span></p>
                  <h1>Explore <span className="warning-text">new ideas</span> <br/> for your business</h1>
                  <div className="d-flex align-items-center" >
                    <a href="#about" className="btn main-btn main-btn--danger"> get start </a>
                    <a href="https://www.youtube.com/embed/TAxLYCsqnsU" className=" popup-youtube btn main-btn main-btn--fill"> <i className="bi bi-play"></i> </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselHero" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselHero" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
    )
  }
}
