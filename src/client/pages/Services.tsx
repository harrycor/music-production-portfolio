import * as React from "react";
import "../scss/servicesStyles.scss";

const Services = () => {
  let backgroundImagePath = "/imgs/trippyguitar.jpg";

  let returnCardsForServices = (title: string, info: string) => {
    return (
      <div
        className="col-4 card services-cards-caontainer"
        style={{ backgroundColor: "black" }}
      >
        <div className="cardbody services-cards-info">
          <h5 className="card-title">{title}</h5>
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
      <div className="card col-6" style={{ backgroundColor: "black" }}>
        <div className="card-body d-flex flex-wrap">
          <h5 className="card-title col-12">{title}</h5>
          <p className="card-text col-6" style={{ color: "gray" }}>
            {infoOne}
          </p>
          <p className="card-text col-6" style={{ color: "gray" }}>
            {infotwo}
          </p>
          <p className="card-text col-6" style={{ color: "gray" }}>
            {infothree}
          </p>
          <p className="card-text col-6" style={{ color: "gray" }}>
            {infofour}
          </p>
          <p className="card-text col-6" style={{ color: "gray" }}>
            {infofive}
          </p>
          <p className="card-text col-6" style={{ color: "gray" }}>
            {infosix}
          </p>
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
        style={{ position: "fixed", zIndex: "-1" }}
      />
      <div style={{ color: "white", backgroundColor: "black" }}>
        <div
          className="services-container card text-center"
          style={{ backgroundColor: "black" }}
        >
          <div>
            <h3>Services</h3>
          </div>
          <div className="d-flex flex-wrap">
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

        <div
          className="studio-container card text-center"
          style={{ backgroundColor: "black" }}
        >
          <div>
            <h3>Studio</h3>
          </div>
          <div className="d-flex flex-wrap">
            {returnsCardForStudio(
              "DAWS & Tools",
              "Protools",
              "iZotope",
              "Universal Audio",
              "Soundtoys",
              "Native Instruments",
              "EWQL"
            )}
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
    </div>
  );
};

export default Services;
