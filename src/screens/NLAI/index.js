import React from "react";
import { ScaleLoader } from "react-spinners";
import FakeBrowser from "components/FakeBrowser";

export default () => {
  return (
    <div
      className="page padded"
      style={{ display: "flex", flexDirection: "column", height: "100vh" }}
    >
      <p style={{ marginTop: 0 }}>
        The idea is to use Watsons Natural Language API to build a simple bot
        that can assist with a game using stats from{" "}
        <a href="http://champion.gg/" target="_blank">
          Chapmion.gg
        </a>. Further enhancing the usability by hooking it to voice recognition
        and eventually deploy it onto a phone so it can sit side by side with
        your computer as a companion.
        <br />
        <i>
          Note - This project is postponed as my Watson trial period expired.<br />
          Please wait a bit for heroku to spin up.
        </i>
      </p>
      <div style={{ width: "100%", flex: 1, margin: "auto" }}>
        <FakeBrowser>
          <span
            style={{ position: "absolute", left: "48%", top: "48%", zIndex: 0 }}
          >
            <ScaleLoader color="rgb(136, 136, 136)" />
          </span>
          <iframe
            src="https://lululeague-assistant.herokuapp.com/"
            frameBorder={0}
            style={{ zIndex: 1 }}
          />
        </FakeBrowser>
      </div>
    </div>
  );
};
