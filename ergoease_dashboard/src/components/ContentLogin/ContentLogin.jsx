/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import ButtonAdvanced from '../ButtonAdvanced/ButtonAdvanced';
import './ContentLogin.scss';
import { useState } from 'react';

const ContentLogin = ({
    title,
    forgotPasswordText,
    linkForgotPassword,
}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="content-login">
            {title && (
                <h1>{title}</h1>
            )}

            <form className="content-login__form-login">
                <div className="content-login__form-login__form-label">
                    <label>E-mail</label>
                    <input 
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}    
                    />
                    <label>Senha</label>
                    <input 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}    
                    />

                    <div className="content-login__redirect">
                        <Link to={linkForgotPassword}>
                            {forgotPasswordText}
                        </Link>
                    </div>
                    <ButtonAdvanced title="Entrar" />
                </div>

            </form>
            
            

        </div>
    )
}

export default ContentLogin;