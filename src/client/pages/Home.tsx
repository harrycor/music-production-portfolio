import * as React from "react";
import "../scss";

const Home = () => {
  let backgroundImagePath = "/imgs/homebackdrop.jpg";
  let portraitColorPath = "/imgs/portraitcolor.JPG";

  return (
    <div style={{ color: "white", marginBottom:"50%" }}>
      <img
        src={backgroundImagePath}
        alt=""
        height={"100%"}
        width={"100%"}
        style={{ position: "fixed", zIndex: "-1" }}
      />
      <div className="d-flex flex-wrap justify-content-center">
        <div
          className="col-md-5 col-9 text-center"
          style={{
            marginTop: "5%",
            marginBottom: "20%",
            backgroundColor: "black",
            opacity: "80%",
            borderRadius: "5px",
          }}
        >
          <div className="home-header">
            <h1 className="home-name-header">Harry Corradi</h1>
          </div>
          <div>- Music Producer -</div>
        </div>
        <div className="col-12 col-md-3"></div>
      </div>
      <div className="m-auto d-flex flex-wrap justify-content-around align-items-center col-12 col-md-10">
        <div
          className="order-2 col-10 col-md-4 d-flex justify-content-center"
          style={{ marginBottom: "30px" }}
        >
          <img src={portraitColorPath} alt="" width={180} height={293} />
        </div>
        <div
          className="text-center order-1 p-2 order-md-last col-10 col-md-6"
          style={{
            marginBottom: "30px",
            backgroundColor: "black",
            opacity: "80%",
            borderRadius: "15px",
            lineHeight: "35px",
            fontSize: "20px",
          }}
        >
          <p>
            I consider sound a language, one of my goals as a sound designer is
            to make audio tell a story, just as a narrator would. I have
            obtained various skills from years of audio and music production and
            have experience in live performances, composing music, collaborating
            with artists and visionaries, recording sessions, and working in
            studios. As a New Yorker, I am dedicated to my work, and always
            looking to learn and expand. Delivering all your audio needs, I’m
            Harry and hope to hear from you soon!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
