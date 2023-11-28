import ContainerBackground from "../../components/ContainerBackground/ContainerBackground";
import useButtonClick from '../../hooks/useButtonClick';
import axios from 'axios';
import { useEffect } from 'react';

const ForgotPasswordPage = () => {

    const { buttonClickData, handleButtonClick } = useButtonClick();

    useEffect( () => {
        try {
            axios.post('http://localhost:3333/esqueciSenha', buttonClickData)
                .then(function (res) {

                    console.log(res)
                    //return res

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
                isForgotPasswordPage
                title="Encontre sua senha"
                handleClick={handleButtonClick}
            />
        </>
    );
}

export default ForgotPasswordPage;