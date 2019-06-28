import React, { PureComponent } from "react";
import { browserHistory } from "react-router";
import { withRouter } from "react-router-dom";

class Leftpanel extends React.Component {
  redirectTablepage() {
    //  browserHistory.push();
    this.props.history.push("/tables-list");
  }

  redirectFormpage() {
    this.props.history.push("/forms-insert");
  }
  //state = {};
  render() {
    return (
      <aside id="left-panel" className="left-panel">
        <nav className="navbar navbar-expand-sm navbar-default">
          <div id="main-menu" className="main-menu collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li>
                <a onClick={this.redirectTablepage.bind(this)}>
                  {" "}
                  <i className="menu-icon fa fa-area-chart" />
                  Table Listing{" "}
                </a>
              </li>
              <li>
                <a onClick={this.redirectFormpage.bind(this)}>
                  {" "}
                  <i className="menu-icon ti-email" />
                  Table View{" "}
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </aside>
    );
  }
}

export default withRouter(Leftpanel);
