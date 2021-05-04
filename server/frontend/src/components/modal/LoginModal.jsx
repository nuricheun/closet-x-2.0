//MODAL DESIGN INSPIRED BY: https://codepen.io/alligatorio/pen/aYzMKL
import {useState} from "react";
import {useModalRef} from '../../hooks/useModal';
import { authValidation } from '../../util/authValidation';
import './modal.css';

const LoginModal = ({login, hideModal}) => {
  
  const node = useModalRef(hideModal)

  const [state, setState] = useState({
      username: "",
      email: "",
      password: ""
    })

  const [error, setError] = useState({});
    
  const handleInput = (type) => {
    return e => setState({ ...state, [type]: e.target.value });
  }

  const handleClick = (type) => { 
    return e => setError({ ...error, [type]: undefined });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = authValidation(state, "signin")
    if(res[0] !== true){
      setError({...error, ...res[1]})
      return
    }
    login(state).then(() => hideModal());
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
        <div className="form-header">Login</div>
        <br />
        <form onSubmit={handleSubmit}>
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
          <div className="button-container">
            <button className="modal-button" onClick={handleSubmit}>Log In</button>
            <button className="modal-button" onClick={handleDemoLogin}>Demo Login</button>
          </div>
        </form>
      </div>
    );
}

export default LoginModal;
