import * as React from "react";
import "../scss/servicesStyles.scss";

const Services = () => {
  let backgroundImagePath = "/imgs/trippyguitar.jpg";

  let returnCardsForServices = (title: string, info: string) => {
    return (
      <div
        className="col-md-3 col-9 p-3 card services-cards-caontainer"
        style={{ backgroundColor: "black" }}
      >
        <div className="cardbody services-cards-info">
          <h5 className="card-title mb-3" style={{ fontSize: "25px" }}>
            {title}
          </h5>
          <p className="card-text card-subtitle" style={{ color: "gray" }}>
            {info}
          </p>
        </div>
      </div>
    );
  };

  let returnsCardForStudio = (
    title: string,
    infoOne: string,
    infotwo: string,
    infothree: string,
    infofour: string,
    infofive: string,
    infosix: string
  ) => {
    return (
      <div className="card col-12" style={{ backgroundColor: "black" }}>
        <div className="card-body d-flex flex-wrap">
          <h5 className="card-title col-12" style={{ fontSize: "25px" }}>
            {title}
          </h5>
          <div className="col-12 d-flex justify-content-center flex-wrap">
            <p className="card-text col-md-6 col-12" style={{ color: "gray" }}>
              {infoOne}
            </p>
            <p className="card-text col-md-6 col-12" style={{ color: "gray" }}>
              {infotwo}
            </p>
            <p className="card-text col-md-6 col-12" style={{ color: "gray" }}>
              {infothree}
            </p>
            <p className="card-text col-md-6 col-12" style={{ color: "gray" }}>
              {infofour}
            </p>
            <p className="card-text col-md-6 col-12" style={{ color: "gray" }}>
              {infofive}
            </p>
            <p className="card-text col-md-6 col-12" style={{ color: "gray" }}>
              {infosix}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <img
        src={backgroundImagePath}
        alt=""
        height={"100%"}
        width={"100%"}
        style={{ position: "sticky", top: "0", zIndex: "-1" }}
      />
      <div style={{ color: "white", paddingBottom: "30%" }}>
        <div
          className="services-container card text-center"
          style={{
            backgroundColor: "black",
            borderRadius: "100px",
            marginLeft: "10px",
            marginRight: "10px",
            paddingBottom: "60px",
            paddingTop: "50px",
          }}
        >
          <div>
            <h3 style={{ fontSize: "60px", paddingBottom: "10px" }}>
              Services
            </h3>
          </div>
          <div className="d-flex flex-wrap">
            <div className="d-flex flex-wrap justify-content-around col-12">
              {returnCardsForServices(
                "Music Production",
                "from indipendant artists to bands, from singles to albums. Lets bring your music to life!"
              )}
              {returnCardsForServices(
                "Mixing & Mastering",
                "make your music stand out with quality sounding audio for any platform or device"
              )}
              {returnCardsForServices(
                "Music Composition",
                "expand and develop your music or create something entirely new"
              )}
            </div>
            <div className="d-flex flex-wrap justify-content-around col-12">
              {returnCardsForServices(
                "Music Scoring",
                "take the viewing experience to the next level by adding soundscapes and textures"
              )}

              {returnCardsForServices(
                "Sound Design",
                "add depth depth to your project with SFX, Foley, Ambiance, and more"
              )}
              {returnCardsForServices(
                "Audio Editing",
                "improve and incorporate your own audio in your own way"
              )}
            </div>
          </div>
        </div>

        <div
          className="studio-container card text-center"
          style={{
            backgroundColor: "black",
            marginTop: "45%",
            borderRadius: "100px",
            marginLeft: "10px",
            marginRight: "10px",
            paddingBottom: "60px",
            paddingTop: "50px",
            paddingRight: "10px",
            paddingLeft: "10px",
          }}
        >
          <div>
            <h3 style={{ fontSize: "60px" }}>Studio</h3>
          </div>
          <div className="d-flex flex-wrap">
            <div className="d-flex flex-wrap justify-content-around col-md-6 col-12">
              {returnsCardForStudio(
                "DAWS & Tools",
                "Protools",
                "iZotope",
                "Universal Audio",
                "Soundtoys",
                "Native Instruments",
                "EWQL"
              )}
            </div>
            <div className="d-flex flex-wrap justify-content-around col-md-6 col-12">
              {returnsCardForStudio(
                "Intruments",
                "Guitar",
                "Piano",
                "Bass",
                "Synthesizer",
                "Ukele",
                "percussion"
              )}
            </div>
          </div>
        </div>
        <div>
          <div className="d-flex flex-wrap justify-content-around col-12">
            <div
              className="d-flex flex-wrap justify-content-center card-bodycol-5"
              style={{
                backgroundColor: "black",
                marginTop: "20%",
                paddingTop: "50px",
                paddingBottom: "50px",
                borderRadius:"50px"
              }}
            >
              <h5 className="col-12 text-center">
                Can't find the service for you?
              </h5>
              <button className="btn btn-link" style={{ color: "blueviolet" }}>
                Contact me!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
