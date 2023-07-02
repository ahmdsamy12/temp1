import React from 'react'
import "./sign.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faExclamationCircle, faLock } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const Sign = () => {

    return (

        <div className='sign-in'><h2>Sign In Now</h2>
        <div className='wrapper'>
            <header>Login Form</header>
            <form action="#">
                <div className="field email">
                    <div className="input-area">
                        <input type="text" placeholder="Email Address" />
                        <i className="icon fas fa-envelope"><FontAwesomeIcon icon={faEnvelope} /></i>
                        <i className="error error-icon fas fa-exclamation-circle"><FontAwesomeIcon icon={faExclamationCircle} /></i>
                    </div>
                    <div className="error error-txt">Email can't be blank</div>
                </div>
                <div className="field password">
                    <div className="input-area">
                        <input type="password" placeholder="Password" />
                        <i className="icon fas fa-lock"><FontAwesomeIcon icon={faLock} /></i>
                        <i className="error error-icon fas fa-exclamation-circle"><FontAwesomeIcon icon={faExclamationCircle} /></i>
                    </div>
                    <div className="error error-txt">Password can't be blank</div>
                </div>
                <div className="pass-txt"><a href="#">Forgot password?</a></div>
                <input type="submit" value="Login" />
            </form>
            <div className="sign-txt">Not yet member? <Link to="/signUp">Signup now</Link></div>
        </div>
    </div>
    )
}

export default Sign;