import ContainerBackground from '../../components/ContainerBackground/ContainerBackground';
import useButtonClick from '../../hooks/useButtonClick';
import axios from 'axios';
import { useEffect } from 'react';

const LoginPage = () => {

    const { buttonClickData, handleButtonClick } = useButtonClick();

    useEffect( () => {
        try {
            axios.post('http://localhost:3333/loginEmpresa', buttonClickData)
                .then(function (res) {

                    console.log(res)
                    return res

                })
                .catch(function (error) {
                console.error(error)
                return error
                });
        } catch(error) {
            console.log('error = ', error)
        }
    }, [buttonClickData])


    return (
        <>
            <ContainerBackground 
                title="Login"
                isLogin
                //forgotPasswordText="Esqueci a senha"
                //linkForgotPassword="/forgot-password"
                handleClick={handleButtonClick}
            />
        </>
    );
}

export default LoginPage;