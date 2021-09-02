import React, { useState, useEffect } from "react";
import UserPageTable from "./UserPageTable";
import CoachFeedback from "./CoachFeedback";
import Card from "./Card";
import Goals from "./Goals";
import Achievements from "./Achievements";

function UserPageTabs() {
  const [activeTab, setActiveTab] = useState("about");
  const [practicee, setPractice] = useState([]);
  const [swimmerGoals, setSwimmerGoals] = useState([]);

  const practices = [
    {
      title: "The Coach Hates Us",
      type: "Specific",
      date: "24.08.2021",
      practice:
        "6 x 100’s warmup (2 swim, 1 kick)\n2 x 100s drill @ Rest 30\n3 x 100s descend 1-3 \n 1 x 100 fast @ Rest 5\n1 x 100 ez @ Rest 20\n2 x 100 fast @ Rest 5\n1 x 100 ez @ Rest 20\n3 x 100 fast @ Rest 5\n1 x 100 ez @ Rest 20\n4 x 100 fast @ Rest 5\n1 x 100 ez @ Rest 20\n5 x 100 fast @ Rest 5",
    },
    {
      title: "Shake it out",
      type: "Warm down",
      date: "23.08.2021",
      practice:
        "1 x 400 warmup\n2 x 300 pull\n 3 x 200 kick with fins\n4 x 100 perfect technique",
    },
  ];

  const swimmerGoalsDetails = [
    {
      key: 0,
      name: "Leonard Posa",
      event: "50 free",
      pb: "23.6",
      lbs: "23.01",
      goal: "22.6",
    },
    {
      key: 1,
      name: "Leonard Posa",
      event: "50 breast",
      pb: "29.1",
      lbs: "29.0",
      goal: "27.99",
    },
  ];
  useEffect(() => {
    practices.map((practice) => {
      setPractice(practice);
      return practicee;
    });

    swimmerGoalsDetails.map((goals) => {
      setSwimmerGoals(goals);
      return swimmerGoals;
    });
  }, [activeTab]);

  return (
    <div className="container">
      <div className="user-tabs">
        <button
          onClick={() => setActiveTab("about")}
          className={
            activeTab === "about"
              ? "tabs-button active"
              : "tabs-button deactive"
          }
        >
          <i class="far fa-address-card"></i>
          <p>About</p>
        </button>
        <button
          onClick={() => setActiveTab("pb")}
          className={
            activeTab === "pb" ? "tabs-button active" : "tabs-button deactive"
          }
        >
          <i className="fas fa-trophy"></i>
          <p>
            Personal
            <br />
            Bests
          </p>
        </button>
        <button
          onClick={() => setActiveTab("goals")}
          className={
            activeTab === "goals"
              ? "tabs-button active"
              : "tabs-button deactive"
          }
        >
          <i className="fas fa-bullseye"></i>
          <p>Goals</p>
        </button>
        <button
          onClick={() => setActiveTab("practices")}
          className={
            activeTab === "practices"
              ? "tabs-button active"
              : "tabs-button deactive"
          }
        >
          <i class="fas fa-fish"></i>
          <p>Practices</p>
        </button>
        <button
          onClick={() => setActiveTab("feedback")}
          className={
            activeTab === "feedback"
              ? "tabs-button active"
              : "tabs-button deactive"
          }
        >
          <i className="far fa-comment-dots"></i>
          <p>
            Coach <br />
            Feedback
          </p>
        </button>
        <button
          onClick={() => setActiveTab("achievements")}
          className={
            activeTab === "achievements"
              ? "tabs-button active"
              : "tabs-button deactive"
          }
        >
          <i className="far fa-star"></i>
          <p>Achievements</p>
        </button>
      </div>

      {
        <div className="tabs-content">
          <div
            className={activeTab === "about" ? "tab show about" : "hidden"}
            style={{ marginTop: "30px" }}
          >
            <h5>STROKE</h5>
            <p>Breastroke/Free/IM</p>
            <h5>BIRTHDAY</h5>
            <p>08.06.1997.</p>
            <h5>EMAIL </h5>
            <p>posa.97@gmail.com</p>
            <h5>PHONE NUMBER</h5>
            <p>0607060064</p>
            <h5>ADDRESS</h5>
            <p>Hunjadi Janosa 33</p>
          </div>

          <div
            className={activeTab === "pb" ? "tab show personal-best" : "hidden"}
          >
            <UserPageTable />
          </div>

          <div className={activeTab === "goals" ? "tab show goals" : "hidden"}>
            {swimmerGoalsDetails.map((goals) => {
              return <Goals key={goals.key} goals={goals} />;
            })}
          </div>

          <div
            className={
              activeTab === "practices" ? "tab show practices" : "hidden"
            }
          >
            {practices.map((practice) => {
              return <Card key={practice.title} practice={practice} />;
            })}
          </div>

          <div
            className={
              activeTab === "feedback" ? "tab show feedback" : "hidden"
            }
          >
            <CoachFeedback />
            <CoachFeedback />
          </div>
          <div
            className={activeTab === "achievements" ? "tab show " : "hidden"}
          >
            <Achievements />
          </div>
        </div>
      }
    </div>
  );
}

export default UserPageTabs;
