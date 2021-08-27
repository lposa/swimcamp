import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import posa from "../images/posajpg.jpg";
import UserPageTabs from "./UserPageTabs";

function UserMenu() {
  return (
    <>
      <Navbar />
      <img className="test-img" src={posa} alt="posa" />
      <div className="container user-page">
        <div className="user-container">
          <div className="user-info">
            <h3>Leonard Posa</h3>
            <p>Swimmer/Coach</p>
            <p>
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
            <UserPageTabs />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UserMenu;
