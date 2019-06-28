import React, { PureComponent } from "react";
class Forget extends React.Component {
  //  state = {  }
  render() {
    return (
      <div className="sufee-login d-flex align-content-center flex-wrap">
        <div className="container">
          <div className="login-content">
            <div className="login-form">
              <form>
                <div className="form-group">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-flat m-b-15"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Forget;
