//MODAL DESIGN INSPIRED BY: https://codepen.io/alligatorio/pen/aYzMKL

import {useState, useEffect} from "react";

const LoginModal = ({currentUser, hideLoginModal, history, errors, login, show}) => {
  
  const [state, setState] = useState({
      username: "",
      email: "",
      password: ""
    })

    
  useEffect(() => {
    if(currentUser){
        if (currentUser === true) {
          hideLoginModal();
          history.push("/dashboard");
        }
    }
  }, [])


  const handleInput = (type) => {
    return e => setState({ [type]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let user = {
      email: state.email,
      password: state.password
    };
    login(user);
  }

  const handleDemoLogin = (e) => {
    e.preventDefault();
    let user = {
      email: "guest@email.com",
      password: "password"
    };
    login(user);
  }

  const renderErrors = () => {
    return (
      <ul>
        {Object.keys(errors).map((error, i) => (
          <li key={`error-${i}`}>{errors[error]}</li>
        ))}
      </ul>
    );
  }

 
  const showHideClassName = show
    ? "login-modal-background display-block"
    : "login-modal-background display-none";

    return (
      <div className={showHideClassName}>
        <div className="modal-subcontainer">
          <div className={"login-form-container"}>
            <div className="login-form-header">Login!</div>
            <br />
            <form onSubmit={handleSubmit}>
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
              <div className="login-buttons">
                <button onClick={handleSubmit}>Log In</button>
                <button onClick={handleDemoLogin}>Demo Login</button>
              </div>

              {/* {renderErrors()} */}
            </form>
          </div>
        </div>
      </div>
    );
  
}

export default LoginModal;
