import React, { PureComponent } from "react";
class Breadcrumps extends React.Component {
  //   state = {  }
  render() {
    return (
      <div className="breadcrumbs">
        <div className="breadcrumbs-inner">
          <div className="row m-0">
            <div className="col-sm-4">
              <div className="page-header float-left">
                <div className="page-title">
                  <h1>Dashboard</h1>
                </div>
              </div>
            </div>
            <div className="col-sm-8">
              <div className="page-header float-right">
                <div className="page-title">
                  <ol className="breadcrumb text-right">
                    <li>
                      <a href="#">Dashboard</a>
                    </li>
                    <li>
                      <a href="#">Forms</a>
                    </li>
                    <li className="active">Basic</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Breadcrumps;
