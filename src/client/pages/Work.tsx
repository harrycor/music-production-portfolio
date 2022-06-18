
import * as React from "react";

const Work = () => {
    let backgroundImagePath = "/imgs/moog.jpg";
    
    return(
        <div>
            <div>
            <img
        src={backgroundImagePath}
        alt=""
        height={"100%"}
        width={"100%"}
        style={{ position: "sticky", top: "0", zIndex: "-1" }}
      />
            </div>
        </div>
    )
}

export default Work;