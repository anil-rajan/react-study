import React, { PureComponent } from "react";
class Register extends React.Component {
  // state = {  }
  render() {
    return (
      <div className="sufee-login d-flex align-content-center flex-wrap">
        <div className="container">
          <div className="login-content">
            <div className="login-form">
              <form>
                <div className="form-group">
                  <label>User Name</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="User Name"
                  />
                </div>
                <div className="form-group">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <div className="checkbox">
                  <label>
                    <input type="checkbox" /> Agree the terms and policy
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-flat m-b-30 m-t-30"
                >
                  Register
                </button>
                <div className="social-login-content">
                  <div className="social-button">
                    <button
                      type="button"
                      className="btn social facebook btn-flat btn-addon mb-3"
                    >
                      <i className="ti-facebook" />
                      Register with facebook
                    </button>
                    <button
                      type="button"
                      className="btn social twitter btn-flat btn-addon mt-2"
                    >
                      <i className="ti-twitter" />
                      Register with twitter
                    </button>
                  </div>
                </div>
                <div className="register-link m-t-15 text-center">
                  <p>
                    Already have account ? <a href="#"> Sign in</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
