import { useEffect } from 'react';
import  ContainerBackground  from '../../components/ContainerBackground/ContainerBackground';
import useButtonClick from '../../hooks/useButtonClick';
import './RegisterPage.scss';

const RegisterPage = () => {
    const { buttonClickData, handleButtonClick } = useButtonClick();

    useEffect(() => {
        console.log('data = ', buttonClickData);
    }, []);

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