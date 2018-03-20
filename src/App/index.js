import _ from "lodash";
import React from "react";
import tabs from "./tabs.js";
import styles from "./styles.scss";
import SideNav from "react-app-engine/src/components/Sidenav";
import { Route, Redirect } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import { fadeBounce } from "react-app-engine/src/transitions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Motion, spring } from "react-motion";

const NavContent = (
  <div className={styles.nav}>
    <h4 style={{ fontWeight: 600 }}>Patrick Lai</h4>
    <h6>Technical Lead</h6>
    <h6>Full stack javascript</h6>
    <h6>
      <a style={{ color: "white" }} href="mailto:mrphlai@gmail.com">
        mrphlai@gmail.com
      </a>
    </h6>
  </div>
);

export default class App extends React.Component {
  render() {
    return (
      <div className={styles.app}>
        <SideNav items={tabs} content={NavContent} />
        <Motion
          defaultStyle={{ opacity: 0, marginTop: 30 }}
          style={{
            opacity: spring(1, { stiffness: 60, damping: 14 }),
            marginTop: spring(0, { stiffness: 60, damping: 14 })
          }}
        >
          {interpolatingStyle => (
            <div className="page" style={interpolatingStyle}>
              <AnimatedSwitch {...fadeBounce} className="switch-wrapper">
                {tabs.map((tab, index) => <Route key={index} {...tab} />)}
                <Redirect to={_.get(tabs, "[0].path")} />
              </AnimatedSwitch>
            </div>
          )}
        </Motion>
      </div>
    );
  }
}
