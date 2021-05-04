//MODAL DESIGN INSPIRED BY: https://codepen.io/alligatorio/pen/aYzMKL
import {useState, useRef} from "react";
import {useModalRef} from '../../hooks/useModal';
import { authValidation } from '../../util/authValidation';
import { asyncInterval } from "../../util/asyncInterval";
import './modal.css';

const LoginModal = ({login, hideModal}) => {
  
  const node = useModalRef(hideModal)
  const inputRef = useRef(null);

  const [state, setState] = useState({
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


  const handleDemoLogin = () => {
    const mockPassword = "password123";
    const mockEmail = "guest@email.com"
    let i = 0;
    let j = 0;

    asyncInterval(
      () => {
        setState({...state, email: state['email']+mockEmail[j]});
        j++;
        return j === mockEmail.length;
      },
      80,
      mockEmail.length
    )
      .then(() =>
        asyncInterval(
          () => {
            setState({...state, password: state['password']+mockPassword[i]});
            i++;
            return i === mockPassword.length;
          },
          80,
          mockPassword.length
        )
      )
      .then(() => inputRef.current.click());
  };

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
            <button className="modal-button" onClick={handleDemoLogin} ref={inputRef}>Demo Login</button>
          </div>
        </form>
      </div>
    );
}

export default LoginModal;
