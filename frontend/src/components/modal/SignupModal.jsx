//MODAL DESIGN INSPIRED BY: https://codepen.io/alligatorio/pen/aYzMKL

import {useState, useEffect} from "react";
import './modal.css';
import './signupmodal.css';

const SignupModal = ({signup, show, toggleSignupModal}) => {

    
    const [userinfo, setUserInfo] = useState({
        username: "",
        email: "",
        password: "",
        password2: ""
    })
  

  // useEffect(() => {
  //   if (currentUser === true) {
  //     toggleSignupModal();
  //     history.push("/dashboard");
  //   }
  // }, [currentUser])

  const handleInput = (type) => {
    return e => setUserInfo({ [type]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(userinfo);
  }

  // const renderErrors = () => {
  //   return (
  //     <ul>
  //       {Object.keys(errors).map((error, i) => (
  //         <li key={`error-${i}`}>{errors[error]}</li>
  //       ))}
  //     </ul>
  //   );
  // }

    const showHideClassName = show
      ? "signup-modal-background display-block"
      : "signup-modal-background display-none";

    return (
      <div className={showHideClassName} onClick={toggleSignupModal}>
        <div className="modal-subcontainer">
          <div className="form-container">
            <div className="signup-form-header">Sign Up</div>
            <br />
            <form onSubmit={handleSubmit}>
              <label>
                Username:
                <br />
                <input type="text" onChange={handleInput("username")} />
              </label>
              <br />
              <label>
                Email:
                <br />
                <input type="text" onChange={handleInput("email")} />
              </label>
              <br />
              <label>
                Password:
                <br />
                <input
                  type="password"
                  onChange={handleInput("password")}
                />
              </label>
              <br />
              <label>
                Re-enter Password:
                <br />
                <input
                  type="password"
                  onChange={handleInput("password2")}
                />
              </label>
              <br />
              <div className="auth-buttons">
                <button onClick={handleSubmit}>Sign Up</button>
              </div>
              {/* {renderErrors()} */}
            </form>
          </div>
        </div>
      </div>
    );
  
}

export default SignupModal;
