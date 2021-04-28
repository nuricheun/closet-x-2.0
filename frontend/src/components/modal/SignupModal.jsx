//MODAL DESIGN INSPIRED BY: https://codepen.io/alligatorio/pen/aYzMKL

import {useState, useRef, useEffect} from "react";
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
    return e => setUserInfo({ [type]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(userinfo);
  }

  const node = useRef();

  useEffect(()=>{
    
    
  document.addEventListener('mousedown', handleClick)
  console.log(node)
        
        
  return () => {
      document.removeEventListener('mousedown', handleClick)
  }
    
}, [node])


    
   const handleClick = (e) => {
       console.log("hey there!", node)
        if(node.current.contains(e.target)){
            return ;
        }
        hideModal();
    }


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
                <button onClick={handleSubmit}>Sign Up</button>
              </div>
            </form>
          </div>
      
    );
  
}

export default SignupModal;
