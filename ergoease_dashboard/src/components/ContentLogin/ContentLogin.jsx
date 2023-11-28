/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import ButtonAdvanced from '../ButtonAdvanced/ButtonAdvanced';
import './ContentLogin.scss';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const ContentLogin = ({
    title,
    forgotPasswordText,
    linkForgotPassword,
    handleClick,
}) => {
    const [login, setLogin] = useState({
        email: '',
        password: '',
    });

    const { handleSubmit } = useForm();

    const formSubmit = () => {
        handleClick(login)
    }

    return (
        <div className="content-login">
            {title && (
                <h1>{title}</h1>
            )}

            <form onSubmit={handleSubmit(formSubmit)} className="content-login__form-login">
                <div className="content-login__form-login__form-label">
                    <label>E-mail</label>
                    <input 
                        type="text"
                        value={login.email}
                        onChange={(e) => setLogin({ ...login, email: e.target.value })}    
                    />
                    <label>Senha</label>
                    <input 
                        type="password"
                        value={login.password}
                        onChange={(e) => setLogin({ ...login, password: e.target.value })}    
                    />

                    <div className="content-login__redirect">
                        <Link to={linkForgotPassword}>
                            {forgotPasswordText}
                        </Link>
                    </div>
                    <ButtonAdvanced title="Entrar" type="submit" />
                </div>

            </form>
            
            

        </div>
    )
}

export default ContentLogin;