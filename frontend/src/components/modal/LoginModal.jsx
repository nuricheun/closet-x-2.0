//MODAL DESIGN INSPIRED BY: https://codepen.io/alligatorio/pen/aYzMKL

import {useState} from "react";
import {useModalRef} from '../../hooks/useModal';
import './modal.css';
import './loginmodal.css';

const LoginModal = ({login, hideModal}) => {
  
  const node = useModalRef(hideModal)

  const [state, setState] = useState({
      username: "",
      email: "",
      password: ""
    })

    

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


    return (

          <div className="form-container" ref={node}>
            <div className="login-form-header">Login</div>
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
              <div className="auth-buttons">
                <button className="modal-button" onClick={handleSubmit}>Log In</button>
                <button className="modal-button" onClick={handleDemoLogin}>Demo Login</button>
              </div>
            </form>
          </div>
    );
  
}

export default LoginModal;
