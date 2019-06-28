import React, { PureComponent } from "react";

class Tablecard extends React.Component {
  state = {
    names: [
      "anil",
      "anoop",
      "amal",
      "ronka",
      "sulabhan",
      "sanju",
      "aneesh",
      "vipin"
    ]
  };

  render() {
    return (
      <div className="content">
        <div className="animated fadeIn">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  <strong className="card-title">Custom Table</strong>
                </div>
                <div className="table-stats order-table ov-h">
                  <table className="table ">
                    <thead>
                      <tr>
                        <th className="serial">#</th>
                        <th className="avatar">Avatar</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Place</th>

                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.names.map((k, i) => {
                        return (
                          <tr>
                            <td key={i} className="serial">
                              {i + 1}.
                            </td>
                            <td className="avatar">
                              <div className="round-img">
                                <a href="#">
                                  <img
                                    className="rounded-circle"
                                    src="images/avatar/1.jpg"
                                    alt=""
                                  />
                                </a>
                              </div>
                            </td>
                            <td> #5469 </td>
                            <td>
                              {" "}
                              <span className="name">Louis Stanley</span>{" "}
                            </td>
                            <td>
                              {" "}
                              <span className="product">iMax</span>{" "}
                            </td>

                            <td>
                              <span className="badge badge-complete">
                                Complete
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tablecard;
