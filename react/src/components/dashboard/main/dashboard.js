import React from 'react';
import { connect } from 'react-redux';
import DashboardRender from './dashboard.render';

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
    };
    this.renderDashboard = this.renderDashboard.bind(this);
  }

  isSectionActive(section) {
    return this.props.Dashboard.activeSection === section;
  }

  renderDashboard() {
    document.body.className = '';

    return DashboardRender.call(this);
  }

  displayDashboard() {
    return this.props &&
      (this.props.Main &&
      this.props.Main.coins &&
      this.props.Main.coins.native &&
      this.props.Main.coins.native.length &&
      !this.props.Main.coins.spv.length) ||
      (this.props.Main &&
      this.props.Main.coins &&
      this.props.Main.coins.spv &&
      this.props.Main.coins.spv.length &&
      this.props.Main.isLoggedIn) ||
      (this.props.Main &&
      this.props.Main.coins &&
      this.props.Main.coins.native &&
      this.props.Main.coins.native.length &&
      !this.props.Main.coins.spv.length &&
      this.props.Main.isLoggedIn);
  }

  render() {
    if (this.displayDashboard()) {
      return this.renderDashboard();
    }

    return null;
  }
}

const mapStateToProps = (state) => {
  return {
    Main: state.Main,
    ActiveCoin: {
      mode: state.ActiveCoin.mode,
    },
    Dashboard: state.Dashboard,
  };
};

export default connect(mapStateToProps)(Dashboard);
