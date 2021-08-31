import React from "react";
import posa from "../images/posa.png";
import petras from "../images/petras.png";
import vujin from "../images/vujin.png";
import acin from "../images/acin.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function OurTeam() {
  return (
    <>
      <Navbar />
      <div className="team-container">
        <Carousel>
          <div className="img-container">
            <img src={posa} className="img-coach" />
            <p className="legend">
              Coach Leonard has been swimming for about 20 years already. He was
              a multiple national champion, from junior all the way to the
              senior category. He represented Serbia at various meets, including
              the Central European Meet. In 2016. , he receives an academic and
              athletic scholarship at the University Of Bridgeport, in the US.
              After 4 years in the US, he graduates with a degree in Computer
              Science, which is his day job now. In the US, he was a multiple
              conference finalist, and also won medals in the 100 and 200
              breaststroke. His speciality are short course pools, where he
              swims Breaststroke, Freestyle and IM. Coach Leonard likes to play
              video games, play guitar and read books.
            </p>
          </div>
          <div className="img-container">
            <img src={petras} className="img-coach" />
            <div className="coach-container">
              <p className="legend">
                Coach Vladimir is one of the clubs best flyers. He started
                swimming at a very early age, and still swims today. He won
                various medals at national championship, ranging from junior all
                the way to his senior years. Currently, he is a sophmore at
                Saint Francis University in Brooklyn, US, where he received both
                academic and athletic scholarships. He represented Serbia at the
                Meet of the Nations (Serbia,Croatia,Slovenia and Bosnia). His
                speciality are Butterfly and IM.
              </p>
            </div>
          </div>
          <div className="img-container">
            <img src={vujin} className="img-coach" />
            <p className="legend">
              {" "}
              Coach Marko has been swimming for about 9 years already. He was a
              multiple national champion, from kadet all the way to the senior
              category. He is a part of the national team sinc 2017 Coach Marko
              graduated from high school Zrenjaninska Gimnazija in 2021 and he
              is now applying to US universities. Coach Marko’s speciality are
              short distance in long and short pools, where he swims Freestyle,
              Butterfly and IM.Coach Marko likes to play Board games and read
              books.
            </p>
          </div>
          <div className="img-container">
            <img src={acin} className="img-coach" />
            <p className="legend">
              Coach Nikola is one of the clubs and countries best swimmers. He
              started swimming at a very early age. He started as a backstroker,
              but now he is all about the freestyle. He won various medals at
              national championships and was a national recorder holder. He
              represented Serbia at all the biggest competitions. His biggest
              success so far are the Olympic Games in Tokyo, where he swam in
              Serbias 4x100 freestyle relaly. He also swam at European and World
              Championships. Currently, he is studying and swimming in Purdue
              University, where he received both academic and atletic
              scholarships. He represented his team at the NCAA Championships.
            </p>
          </div>
        </Carousel>
      </div>
      <Footer />
    </>
  );
}

export default OurTeam;
