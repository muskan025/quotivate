import React from "react";
import "./Home.scss";
import { Navbar } from "../Navbar/Navbar";
import Lottie from "lottie-react";
 import pic1 from '../../images/image-home/img-h1.jpg'
import pic2 from '../../images/image-home/img-h2.jpg'
import pic3 from '../../images/image-home/img-h3.jpg'
import pic4 from '../../images/image-home/img-h4.jpg'
import { Link } from "react-router-dom";
 import { Headersvg } from "../svgs/headersvg/Headersvg";
import { Footer } from "../Footer/Footer";

export const Home = () => {
  return (

    <div className="home" id="home">
        <section className="hero"  >
        {/* <Navbar /> */}
        <div className="h-content">
          <span>Your Daily</span>

          <span className="inspiration">Dose of Inspiration</span>

          <h2>
            Step into a world where every line sparks wisdom,
            <br />
            lighting up your life with inspiration and insight.
          </h2>
          <Link to='/my-quotes' className="btn h-btn">Get Inspired</Link>
        </div>
       
        <Headersvg/>
</section>
      <section className="h-keypoints">
        <div className="h-heading">
        <h1>Good reasons to read quotes!</h1>
        {/* <div class="custom-shape-divider-bottom-1699721916">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div> */}
        </div>
        <div className="keypoints">
          <div className="keypoint">
            <div className="point">
              <h2>Inspiration Boost</h2>
              <p>
                Quotes are like little power-ups for your soul. They give you a
                quick dose of motivation and help you kickstart your day with
                enthusiasm. Reading them is like having a friendly pep talk with
                a wise friend.
              </p>
              <div className="line"></div>
          </div>
          <div className="img-1"></div>
            </div>
           
         
          <div className="keypoint">
            <div className="img-2"></div>
            <div className="point">
              <h2> Wisdom in a Nutshell</h2>
              <p>
                Who has time to read lengthy books these days? Quotes are like
                bite-sized nuggets of wisdom. They condense the best life
                lessons into a few lines, making it easy to absorb and apply in
                your life. It's like getting the CliffsNotes of life itself.
              </p>
              <div className="line"></div>
            </div>
          </div>
          <div className="keypoint">
            <div className="point">
              <h2>Mood Lifters</h2>
              <p>
                Feeling down or stressed? Quotes are your mood boosters. They
                have the magical ability to turn a frown into a smile. They
                remind you that you're not alone in your struggles and that
                better days are ahead. It's like having a pocketful of sunshine.
              </p>
              <div className="line"></div>
            </div>
            <div className="img-3"></div>
            

          </div>
          <div className="keypoint">
          <div className="img-4"></div>
            <div className="point">
              <h2>Shared Insights</h2>
              <p>
                Quotes are universal. They connect us to the experiences and
                insights of people from all walks of life and all corners of the
                world. They remind us that, despite our differences, we share
                similar emotions, dreams, and aspirations. Quotes are like the
                common language of the heart.
              </p>
              <div className="line"></div>
            </div>
           

          </div>
        </div>
      </section>
       <Footer/>
    </div>
  );
};
