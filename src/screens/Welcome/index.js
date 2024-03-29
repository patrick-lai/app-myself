import React from "react";

export default () => {
  return (
    <div className="page padded">
      <section>
        <h1>About Me</h1>
        <hr />
        <p>
          I am a full stack javascript technical lead, currently working with
          React, React-native, Node/Express, Postgresql.
          <br />
          Most passionate about architecting systems that are rock solid
          reliable and maintainable.
        </p>
      </section>
      <section>
        <h1>Current position</h1>
        <hr />
        <h5>Technical lead - Next practice health</h5>
        <h5 className="thin">Responsibilities</h5>
        <ul style={{ marginTop: 0 }}>
          <li>
            Architect and develop an agnostic backend system, which can readily
            integrate with new partners (node, express, postgres, heroku).
          </li>
          <li>
            Develop leading prototypes to scope out new technologies for a
            candidate to integrate into main app suite. (React, redux,
            redux-saga)
          </li>
          <li>
            Develop react-native apps that has complexed charting, remote
            notifications, bluetooth integration. (IOS/android)
          </li>
          <li>Unit/Integration testing. (Jest, WebdriverIO, enzyme)</li>
          <li>
            Establish coding standards and develop guidelines. Maintained
            internal development guides.
          </li>
          <li>
            Conduct code reviews and design discussions, Sign off sprint tasks
          </li>
          <li>
            Helping and mentoring other devlopers in coding principles and
            design philosophies
          </li>
          <li>
            Liaise with stakeholders and business partners to pave way for
            upcoming features.
          </li>
        </ul>
      </section>
    </div>
  );
};
