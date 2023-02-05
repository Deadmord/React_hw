import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import "./style.scss";
export const DefaultLayout = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="defaultLayout-container" style={{backgroundImage: 'url(bg-login2.jpg)', display: "flex", flexDirection: "column", alignItems: "center", height: "100vh"}}>

        <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
          <button
            className="p-button-secondary p-button-text text-violet-100"
            style={{borderBottom: "1px solid #888", margin: "0 0 25px 0", fontSize: "20px", fontWeight: "bold"}}
            onClick={() => loginWithRedirect()} >
                Go To Dashboard
            </button>
        </div>
          <footer className="footer-container text-violet-200" style={{ position: "fixed", bottom: "0", width: "60%", textAlign: "justify"}}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Maxime blanditiis error ullam illum quas. Architecto eos qui dignissimos neque aperiam tempore ad veritatis,
              exercitationem nesciunt modi blanditiis doloremque commodi repellendus velit corporis eveniet!
              Nisi dolore repellendus consectetur, aliquam culpa odit et est, labore officia quas, dolor amet sed error! Officiis.
        </footer>
    </div>
  );
};
