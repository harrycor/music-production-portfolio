import * as React from "react";

const Work = () => {
  let backgroundImagePath = "/imgs/moog.jpg";
  let theGrindCoverImgPath = "/imgs/grindcover.jpg";
  let theNATCoverImgPath = "/imgs/natcover.jpg";

  return (
    <div style={{marginBottom:"50%"}}>
      <img
        src={backgroundImagePath}
        alt=""
        height={"100%"}
        width={"100%"}
        style={{ position: "fixed", top: "0", zIndex: -1 }}
      />
      <div style={{ marginTop: "10rem" }}>
        <div className="d-flex justify-content-center">
          <div
            className="col-10 col-md-3 d-flex justify-content-center"
            style={{ backgroundColor: "black", borderRadius: "20rem" }}
          >
            <h3 style={{ fontSize: "5rem", color: "lightblue" }}>Work</h3>
          </div>
        </div>
        <div className="proudction-container d-flex justify-content-center flex-wrap">
          <div
            className="grind d-flex justify-content-center flex-wrap"
            style={{
              margin: "1rem",
              paddingTop: "2rem",
              backgroundColor: "black",
              border: "solid black 1px",
              // height: "20rem",
              width: "20rem",
            }}
          >
            <div className="col-12 d-flex justify-content-center">
              <img
                src={theGrindCoverImgPath}
                alt=""
                style={{ height: "15rem", width: "15rem" }}
              />
            </div>
            <div className="text-center">
              <h5>
                The Grind
                <br />
                Wrestling's Reality TV Show
              </h5>
              <p>Music Production, Mixing, Mastering </p>
            </div>
          </div>
          <div
            className="NAT d-flex justify-content-center flex-wrap"
            style={{
              margin: "1rem",
              paddingTop: "2rem",
              backgroundColor: "black",
              border: "solid black 1px",
              // height: "20rem",
              width: "20rem",
            }}
          >
            <div className="col-12 d-flex justify-content-center">
              <img
                src={theNATCoverImgPath}
                alt=""
                style={{ height: "15rem", width: "15rem" }}
              />
            </div>
            <div className="text-center">
              <h5>The Native Alien Tribe</h5>
              <p>Guitars </p>
            </div>
          </div>
        </div>
        <div className="sound-design-container d-flex justify-content-center flex-wrap">
          <div
            className="fatty-diver d-flex justify-content-center flex-wrap"
            style={{
              margin: "1rem",
              paddingTop: "2rem",
              backgroundColor: "black",
              border: "solid black 1px",
              height: "20rem",
              width: "20rem",
            }}
          >
            <div className="col-12 d-flex justify-content-center">
              <div style={{ padding: ":56.25% 0 0 0;position:relative" }}>
                <iframe
                  src="https://player.vimeo.com/video/379335669?h=43ccb270d8&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  frameBorder={0}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  style={{
                    // position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                  }}
                  title="Fatty Diver Remake"
                ></iframe>
              </div>
              <script src="https://player.vimeo.com/api/player.js"></script>
            </div>
            <div>sound design</div>
          </div>
          <div
            className="fatty-diver d-flex justify-content-center flex-wrap"
            style={{
              margin: "1rem",
              paddingTop: "2rem",
              backgroundColor: "black",
              border: "solid black 1px",
              height: "20rem",
              width: "20rem",
            }}
          >
            <div className="col-12 d-flex justify-content-center">
              <div style={{ padding: "42.5% 0 0 0;position:relative" }}>
                <iframe
                  src="https://player.vimeo.com/video/379334106?h=01fbacd4e4&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  style={{
                    // position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                  }}
                  title="Snow Trailer Remake"
                ></iframe>
              </div>
              <script src="https://player.vimeo.com/api/player.js"></script>
            </div>
            <div>sound design</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
