/* eslint-disable react/prop-types */
import { useState } from 'react';
import './ContentForgotPassword.scss';
import ButtonAdvanced from '../ButtonAdvanced/ButtonAdvanced';
import { useForm } from 'react-hook-form';

const ContentForgotPassword = ({
    title,
    handleClick,
}) => {
    const [forgotPassword, setEmail] = useState({
        email: ''
    });

    const { handleSubmit } = useForm();

    const formSubmit = () => {
        handleClick(forgotPassword)
    }

    return (
        <div className="content-forgot-password">
            <form onSubmit={handleSubmit(formSubmit)}>
                <div className="content-forgot-password__content-info">
                    <h1>{title}</h1>
                    <label>Insira seu email para recuperar a sua senha.</label>
                    <input 
                        type="text" 
                        value={forgotPassword.email} 
                        onChange={(e) => setEmail({...forgotPassword, email: e.target.value})} 
                    />
                </div>
                <ButtonAdvanced classNameProps="send-forgot-password" title="Enviar" type="submit"/>
            </form>
        </div>
    );
}

export default ContentForgotPassword;