import React, { PureComponent } from "react";
class Content extends React.Component {
  state = {};
  render() {
    return (
      <div className="content">
        <div className="animated fadeIn">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  <strong>Company</strong>
                  <small> Form</small>
                </div>

                <div className="card-body card-block">
                  <div className="form-group">
                    <label className=" form-control-label">Name</label>
                    <input
                      type="text"
                      id="company"
                      placeholder="Enter your  name"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label className=" form-control-label">Id </label>
                    <input
                      type="text"
                      id="vat"
                      placeholder="DE1234567890"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label className=" form-control-label">Place</label>
                    <input
                      type="text"
                      id="street"
                      placeholder="Enter Place you are living"
                      className="form-control"
                    />
                  </div>

                  <div className="col-3">
                    <button
                      id="payment-button"
                      type="submit"
                      className="btn btn-lg btn-info btn-block"
                    >
                      <i className="fa fa-folder fa-sm" />
                      <span id="payment-button-amount">Save</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
