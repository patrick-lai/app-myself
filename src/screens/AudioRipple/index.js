import React from "react";

export default () => {
  return (
    <div className="page">
      <iframe
        src="https://audio-ripple.firebaseapp.com/"
        style={{ width: "100%", height: "100%", position: "absolute" }}
        frameBorder={0}
      />
    </div>
  );
};
