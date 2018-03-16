import React from "react";
import { ScaleLoader } from "react-spinners";

export default () => {
  return (
    <div
      className="page padded"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <p>
        Please wait a bit for heroku to spin up.{" "}
        <i>
          Note - This has stopped working as my Watson.ai trial period expired
        </i>
      </p>
      <div
        style={{
          width: "100%",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <span style={{ position: "absolute", left: "48%", top: "48%" }}>
          <ScaleLoader color="rgb(136, 136, 136)" />
        </span>
        <iframe
          src="https://lululeague-assistant.herokuapp.com/"
          frameBorder={0}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: "100%",
            height: "100%"
          }}
        />
      </div>
    </div>
  );
};
