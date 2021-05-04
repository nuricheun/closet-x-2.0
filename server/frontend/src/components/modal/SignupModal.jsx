//MODAL DESIGN INSPIRED BY: https://codepen.io/alligatorio/pen/aYzMKL

import {useState} from "react";
import {useModalRef} from '../../hooks/useModal';
import { authValidation } from '../../util/authValidation';
import './modal.css';

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

  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = authValidation(userinfo, "notsignin")
    if(res[0] !== true){
      setError({...error, ...res[1]})
      return;
    }
    signup(userinfo).then(()=>hideModal());
  }


  const handleClick = (type) => { 
    return e => setError({ ...error, [type]: undefined });
  }
    const node = useModalRef(hideModal)

    return (
          <div className="form-container" ref={node}>
            <div className="form-header">Sign Up</div>
            <br />
            <form onSubmit={handleSubmit}>
              <label>
                Username:
                <br />
                <input type="text" onChange={handleInput("username")} onClick={handleClick('username')}/>
                { error["username"] && <p className="error-message">{error["username"]}</p>}
              </label>
              <br />
              <label>
                Email:
                <br />
                <input type="text" onChange={handleInput("email")} onClick={handleClick('email')}/>
                { error["email"] && <p className="error-message">{error["email"]}</p>}
              </label>
              <br />
              <label>
                Password:
                <br />
                <input
                  type="password"
                  onChange={handleInput("password")}
                  onClick={handleClick('password')}
                />
                { error["password"] && <p className="error-message">{error["password"]}</p>}
              </label>
              <br />
              <label>
                Re-enter Password:
                <br />
                <input
                  type="password"
                  onChange={handleInput("password2")}
                  onClick={handleClick('passwordconfirm')}
                />
                { error["passwordconfirm"] && <p className="error-message">{error["passwordconfirm"]}</p>}
              </label>
              <br />
              <div className="button-container">
                <button className="modal-button" onClick={handleSubmit}>Sign Up</button>
              </div>
            </form>
          </div>
      
    );
  
}

export default SignupModal;
