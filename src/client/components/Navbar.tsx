import * as React from "react";
import { NavLink } from "react-router-dom";
import "../scss/navbarStyles.scss";

const Navbar = () => {
  let [displayNavLinksPopOut, setDisplayNavLinksPopOut] =
    React.useState<boolean>(false);
  let wrapperRef = React.useRef(null); //this closes autocomplete list when mouse clicks off of it

  React.useEffect(() => {
    document.addEventListener("mousedown", hideMenu);

    return () => {
      document.removeEventListener("mousedown", hideMenu);
    };
  }, []);

  let hideMenu = (e: any) => {
    let { current: wrap }: any = wrapperRef;
    if (wrap && !wrap.contains(e.target)) {
      setDisplayNavLinksPopOut(false);
    }
  };
  return (
    <div
      className="nav-container d-flex flex-nowrap justify-content-between"
      style={{
        marginBottom: "5rem",
        position: "fixed",
        top: "0",
        opacity: "95%",
        zIndex: 1,
        width: "100%",
        backgroundColor: "gray",
      }}
    >
      <div>
        <NavLink
          to={"/"}
          //   onClick={hideMenu}
          className={({ isActive }) => `nav-link ${isActive && "active"}`}
        >
          HCP
        </NavLink>
      </div>
      <nav className="nav nav-pills">
        <div className="d-md-block d-none">
          <div
            className="right-side d-flex flex-nowrap"
            style={{ paddingRight: "2rem" }}
          >
            <NavLink
              to={"/services"}
              //   onClick={hideMenu}
              className={({ isActive }) => `nav-link ${isActive && "active"}`}
            >
              Services
            </NavLink>
            <NavLink
              to={"/work"}
              //   onClick={hideMenu}
              className={({ isActive }) => `nav-link ${isActive && "active"}`}
            >
              Work
            </NavLink>
            <div className="contact d-flex justify-content-center align-items-center">
              <a href="mailto:harrycorradi1@gmail.com?subject=Harry Corradi Productions Contact Form">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div
        onClick={() => setDisplayNavLinksPopOut(!displayNavLinksPopOut)}
        ref={wrapperRef}
        className="d-md-none d-block"
        style={{ height: "2.5rem", width: "2.5rem", padding: ".3rem" }}
      >
        <div
          className="d-flex flex-wrap  align-content-around"
          style={{
            width: "100%",
            height: "100%",
            border: "solid black 1px",
            padding: ".1rem",
          }}
        >
          <div
            style={{
              height: ".2rem",
              width: "3rem",
              backgroundColor: "black",
            }}
          ></div>
          <div
            style={{
              height: ".2rem",
              width: "3rem",
              backgroundColor: "black",
            }}
          ></div>
          <div
            style={{
              height: ".2rem",
              width: "3rem",
              backgroundColor: "black",
            }}
          ></div>
        </div>
        {/*  */}
        {displayNavLinksPopOut && (
          <nav className="nav nav-pills">
            <div
              style={{ position: "fixed", right: "0", textAlign: "center" }}
              className="d-md-none d-block"
            >
              <div
                className="right-side d-flex flex-wrap align-items-colum"
                style={{
                //   paddingRight: "2rem",
                  width: "10rem",
                  marginTop: ".5rem",
                  backgroundColor: "black",
                }}
              >
                <div className="col-12">
                  <NavLink
                    to={"/services"}
                    //   onClick={hideMenu}
                    className={({ isActive }) =>
                      `nav-link ${isActive && "active"}`
                    }
                  >
                    Services
                  </NavLink>
                </div>
                <div className="col-12">
                  <NavLink
                    to={"/work"}
                    //   onClick={hideMenu}
                    className={({ isActive }) =>
                      `nav-link ${isActive && "active"}`
                    }
                  >
                    Work
                  </NavLink>
                </div>
                <div className="contact d-flex justify-content-center align-items-center col-12">
                  <a href="mailto:harrycorradi1@gmail.com?subject=Harry Corradi Productions Contact Form">
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </nav>
        )}
        {/*  */}
      </div>
    </div>
  );
};

export default Navbar;
