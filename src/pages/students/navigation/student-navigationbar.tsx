import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import "./style.scss";

interface INavBarProps {
    route: string;
    setRoute: (route: string) => void;
}
  
export const StudentNavBar = ({ route, setRoute } : INavBarProps) => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="nav-container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
                  <div className="navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                  <span>
                  <button
                    className="nav-link active"
                    onClick={() => setRoute("list")}
                  >
                    Students list
                  </button>
                      </span>
                      <span>
                  <button className="nav-link" onClick={() => setRoute("add")}>
                    Add student
                  </button>
                </span>
                </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
