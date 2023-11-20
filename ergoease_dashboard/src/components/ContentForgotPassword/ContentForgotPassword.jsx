/* eslint-disable react/prop-types */
import { useState } from 'react';
import './ContentForgotPassword.scss';
import ButtonAdvanced from '../ButtonAdvanced/ButtonAdvanced';

const ContentForgotPassword = ({
    title
}) => {
    const [email, setEmail] = useState();

    return (
        <div className="content-forgot-password">
            <div className="content-forgot-password__content-info">
                <h1>{title}</h1>
                <label>Insira seu email para recuperar a sua senha.</label>
                <input 
                    type="text" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
            </div>
            <ButtonAdvanced classNameProps="send-forgot-password" title="Enviar"/>
        </div>
    );
}

export default ContentForgotPassword;