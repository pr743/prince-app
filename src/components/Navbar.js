import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
  return (
    <>
      <style>{`
        nav {
          background-color: rgb(255, 82, 0);
          position: sticky;
          top: 0;
          z-index: 200;
          padding: 12px 40px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          overflow: hidden;
        }

        nav img {
          height: 40px;
          cursor: pointer;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-left: 50px;
        }

        .nav-links a {
          font-size: 15px;
          color: white;
          font-weight: 600;
          text-decoration: none;
        }

        .nav-buttons {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .nav-buttons button {
          border-radius: 25px;
          font-size: 13px;
          white-space: nowrap;
          padding: 8px 12px;
          font-weight: 600;
        }

        @media (max-width: 992px) {
          nav {
            padding: 8px 20px;
            height: 58px;
          }

          nav img {
            height: 34px;
          }

          .nav-links {
            gap: 12px;
            margin-left: 15px;
          }

          .nav-links a {
            font-size: 13px;
          }

          .nav-buttons button {
            font-size: 12px;
            padding: 4px 8px;
          }
        }

        @media (max-width: 578px) {
          nav {
            padding: 6px 10px;
            height: 52px;
            flex-wrap: wrap;
            justify-content: center;
          }

          nav img {
            height: 28px;
          }

          .nav-links {
            gap: 8px;
            margin-left: 0;
          }

          .nav-links a {
            font-size: 11px;
          }

          .nav-buttons {
            margin-top: 4px;
          }

          .nav-buttons button {
            font-size: 10px;
            padding: 2px 6px;
          }
        }
      `}</style>

      <header>
        <nav>
          <div className="d-flex align-items-center flex-shrink-0">
            <a href="https://www.swiggy.com/">
              <img
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"
                alt="Swiggy Logo"
                className="img-fluid"
                style={{ height: "45px", marginLeft: "50px" }}
              />
            </a>
          </div>

          <div className="nav-links">
            <a href="https://www.swiggy.com/corporate/">Swiggy Corporate</a>
            <a href="https://partner.swiggy.com/login#/swiggy">Partner with us</a>
          </div>

          <div className="nav-buttons">
            <button className="btn btn-light">Get the App ➚</button>
            <button className="btn btn-dark">Sign in</button>
          </div>
        </nav>
      </header>
    </>
  );
}
