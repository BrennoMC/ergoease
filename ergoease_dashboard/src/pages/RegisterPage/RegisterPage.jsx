import { useEffect } from 'react';
import  ContainerBackground  from '../../components/ContainerBackground/ContainerBackground';
import useButtonClick from '../../hooks/useButtonClick';
import './RegisterPage.scss';
import axios from 'axios';


const RegisterPage = () => {
    const { buttonClickData, handleButtonClick } = useButtonClick();

    useEffect( () => {
        try {
            axios.post('http://localhost:3333/cadastroEmpresa', buttonClickData)
                .then(function (res) {

                console.log(res.data.response)

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
        <div className="content-register">
            <ContainerBackground 
                isRegister
                title="Cadastrar"
                handleClick={handleButtonClick}
            />
        </div>
    );
}

export default RegisterPage;