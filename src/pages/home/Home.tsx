import React from "react";
import "./Home.scss";
import bodyshot from "../../assets/images/bodyshot.jpg";

function Home(): JSX.Element {
  return (
    <div className="home">
      <div className="home__bodyshot">
        <img src={bodyshot} />
      </div>
      <div className="home__text">
        <h1 className="home__header">Jordan Myers Portfolio Website</h1>
        <h2>A project for CS5167 - User Interface I</h2>
      </div>
    </div>
  );
}

export default Home;
