import _ from 'lodash';
import React from 'react';
import tabs from './tabs.js';
import styles from './styles.scss';
import SideNav from 'react-app-engine/src/components/Sidenav';
import { Route, Redirect } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import { fade } from 'react-app-engine/src/transitions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

export default class App extends React.Component {
  render() {
    return (
      <div className={styles.app}>
        <SideNav items={tabs} />
        <div className="page">
          <AnimatedSwitch {...fade} className="switch-wrapper">
            {tabs.map((tab, index) => <Route key={index} {...tab} />)}
            <Redirect to={_.get(tabs, '[0].to')} />
          </AnimatedSwitch>
        </div>
      </div>
    );
  }
}
