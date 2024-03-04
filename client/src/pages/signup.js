import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-regular-svg-icons";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [passwordType, setPasswordType] = useState("password");
  const togglePassword = (e) => {
    e.preventDefault();
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  return (
    <React.Fragment>
      <section>
        <div className="container">
          <div className=" login">
            <form className="form">
              <h3>Sign Up:</h3>
              <label className="userid" htmlFor="student-id">
                Email ID:
              </label>
              <input
                className="useridbox"
                placeholder="Enter Email Here..."
                type="text"
                id="student-id"
                name="student-id"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="userid" htmlFor="student-id">
                User Name:
              </label>
              <input
                className="useridbox"
                placeholder="Enter User Name Here..."
                type="text"
                id="student-id"
                name="student-id"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="passwordtext" htmlFor="password">
                Password:
              </label>
              <div className="passwordbox">
                <div className="password">
                  <input
                    className="passwordtextbox"
                    placeholder="Enter Password Here..."
                    type={passwordType}
                    // id="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {/* <div className="eye-btn"> */}
                <button onClick={togglePassword} className="eye-btn">
                  {passwordType === "password" ? (
                    <FontAwesomeIcon icon={faEye} />
                  ) : (
                    <FontAwesomeIcon icon={faEyeSlash} />
                    // <p>edsf</p>
                    //   <FontAwesomeIcon icon="fa-regular fa-eye-slash" />
                  )}
                </button>
                {/* </div> */}
              </div>
              <label className="passwordtext" htmlFor="password">
                Confirm Password:
              </label>
              <div className="passwordbox">
                <div className="password">
                  <input
                    className="passwordtextbox"
                    placeholder="Enter Password Here..."
                    type={passwordType}
                    // id="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {/* <div className="eye-btn"> */}
                <button onClick={togglePassword} className="eye-btn">
                  {passwordType === "password" ? (
                    <FontAwesomeIcon icon={faEye} />
                  ) : (
                    <FontAwesomeIcon icon={faEyeSlash} />
                    // <p>edsf</p>
                    //   <FontAwesomeIcon icon="fa-regular fa-eye-slash" />
                  )}
                </button>
                {/* </div> */}
              </div>
              <br />
              {/* <p class="error">{error}</p> */}
              <br />
              <button className="button1">SignUp</button>
              <h6 className="forgotpassword">
                Forgot Password? <Link to="/ForgotPassword">Click Here</Link>
              </h6>
            </form>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default SignUp;
