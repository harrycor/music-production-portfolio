import * as React from "react";

const Work = () => {
  let backgroundImagePath = "/imgs/moog.jpg";
  let theGrindCoverImgPath = "/imgs/grindcover.jpg";
  let theNATCoverImgPath = "/imgs/natcover.jpg";

  return (
    <div>
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
            className="col-3 d-flex justify-content-center"
            style={{ backgroundColor: "black", borderRadius: "20rem" }}
          >
            <h3 style={{ fontSize: "5rem", color: "lightblue" }}>Work</h3>
          </div>
        </div>
        <div className="proudction-container d-flex justify-content-center">
          <div
            className="grind d-flex justify-content-center flex-wrap"
            style={{
              backgroundColor: "black",
              height: "20rem",
              width: "20rem",
            }}
          >
            <div className="col-12 d-flex justify-content-center" style={{paddingTop:"5rem"}}>
              <img
                src={theGrindCoverImgPath}
                alt=""
                style={{ height: "15rem", width: "15rem" }}
              />
            </div>
            <div>Music Production, Mixing, Mastering </div>
          </div>
          <div
            className="NAT d-flex justify-content-center flex-wrap"
            style={{
              backgroundColor: "black",
              height: "20rem",
              width: "20rem",
            }}
          >
            <div className="col-12 d-flex justify-content-center" style={{paddingTop:"5rem"}}>
              <img
                src={theNATCoverImgPath}
                alt=""
                style={{ height: "15rem", width: "15rem" }}
              />
            </div>
            <div>Guitars</div>
          </div>
        </div>
        <div className="sound-design-container"></div>
      </div>
    </div>
  );
};

export default Work;
