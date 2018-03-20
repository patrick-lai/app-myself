import React from "react";
import FakeBrowser from "components/FakeBrowser";

export default () => {
  return (
    <div
      className="page padded"
      style={{ display: "flex", flexDirection: "column", height: "100vh" }}
    >
      <p style={{ marginTop: 0 }}>
        Dynamically generates ripples based on a sound track. Uses{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API"
          target="_blank"
        >
          WebAudio Api
        </a>{" "}
        to analyze audio in <i>REAL TIME</i>.
      </p>
      <div style={{ width: "100%", flex: 1, margin: "auto" }}>
        <FakeBrowser>
          <iframe src="https://audio-ripple.firebaseapp.com/" frameBorder={0} />
        </FakeBrowser>
      </div>
    </div>
  );
};
