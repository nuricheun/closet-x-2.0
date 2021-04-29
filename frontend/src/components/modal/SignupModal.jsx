//MODAL DESIGN INSPIRED BY: https://codepen.io/alligatorio/pen/aYzMKL

import {useState} from "react";
import {useModalRef} from '../../hooks/useModal';
import './modal.css';
import './signupmodal.css';

const SignupModal = ({signup, hideModal}) => {

  const [userinfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
    password2: ""
  })

  const handleInput = (type) => {
    return e => setUserInfo({ ...userinfo, [type]: e.target.value });
  }

  const handleSubmit = (e) => {
    console.log(userinfo)
    e.preventDefault();
    signup(userinfo).then(()=>hideModal());
  }

    const node = useModalRef(hideModal)

    return (
      
        
          <div className="form-container" ref={node}>
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
                <button className="modal-button" onClick={handleSubmit}>Sign Up</button>
              </div>
            </form>
          </div>
      
    );
  
}

export default SignupModal;
