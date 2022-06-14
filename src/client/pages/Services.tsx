import * as React from "react";

const Services = () => {
  let backgroundImagePath = "/imgs/trippyguitar.jpg";
  return (
    <div>
      <img
        src={backgroundImagePath}
        alt=""
        height={"100%"}
        width={"100%"}
        style={{ position: "fixed", zIndex: "-1" }}
      />
      <div>
        <div
          className="services-container card text-center"
          style={{ backgroundColor: "black" }}
        >
          <div>
            <h3>Services</h3>
          </div>
          <div className="d-flex flex-wrap">
            <div className="col-4 card">
              <div className="cardbody">
                <h5 className="card-title">Music Production</h5>
                <p className="card-text">
                  from indipendant artists to bands, from singles to albums.
                  Lets bring your music to life!
                </p>
              </div>
            </div>
            <div className="col-4 card">
              <div className="cardbody">
                <h5 className="card-title">Mixing & Mastering</h5>
                <p className="card-text">
                  make your music stand out with quality sounding audio for any
                  platform or device
                </p>
              </div>
            </div>
            <div className="col-4 card">
              <div className="cardbody">
                <h5 className="card-title">Music Composition</h5>
                <p className="card-text">
                  expand and develop your music or create something entirely new
                </p>
              </div>
            </div>
            <div className="col-4 card">
              <div className="cardbody">
                <h5 className="card-title">Music Scoring</h5>
                <p className="card-text">
                  take the viewing experience to the next level by adding
                  soundscapes and textures
                </p>
              </div>
            </div>
            <div className="col-4 card">
              <div className="cardbody">
                <h5 className="card-title">Sound Design</h5>
                <p className="card-text">
                  add depth depth to your project with SFX, Foley, Ambiance, and
                  more
                </p>
              </div>
            </div>
            <div className="col-4 card">
              <div className="cardbody">
                <h5 className="card-title">Audio Editing</h5>
                <p className="card-text">
                  improve and incorporate your own audio in your own way
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="studio-container card text-center">
          <div>
            <h3>Studio</h3>
          </div>
          <div className="d-flex flex-wrap">
            <div className="card col-6">
              <div className="card-body d-flex flex-wrap">
                <h5 className="card-title col-12">DAWS & Tools</h5>
                <p className="card-text col-6">Protools</p>
                <p className="card-text col-6">iZotope</p>
                <p className="card-text col-6">Universal Audio</p>
                <p className="card-text col-6">Soundtoys</p>
                <p className="card-text col-6">Native Instruments</p>
                <p className="card-text col-6">EWQL</p>
              </div>
            </div>
            <div className="card col-6">
              <div className="card-body d-flex flex-wrap">
                <h5 className="card-title col-12">Intruments</h5>
                <p className="card-text col-6">Guitar</p>
                <p className="card-text col-6">Piano</p>
                <p className="card-text col-6">Bass</p>
                <p className="card-text col-6">Synthesizer</p>
                <p className="card-text col-6">Ukele</p>
                <p className="card-text col-6">percussion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
