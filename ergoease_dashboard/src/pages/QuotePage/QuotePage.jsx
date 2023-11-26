import { useEffect } from 'react';
import ContainerBackground from '../../components/ContainerBackground/ContainerBackground';
import useButtonClick from '../../hooks/useButtonClick';
import api from '../../service/api';
import axios from 'axios';

const QuotePage = () => {
    const { buttonClickData, handleButtonClick } = useButtonClick();
    const text = {
        title: 'Transforme o conforto em lucro',
        description: 'Solicite um orçamento de ergonomia para sua empresa com a ErgoEase e descubra como a saúde e a produtividade andam de mãos dadas'
    }

    useEffect( () => {
        try {
            axios.post("http://localhost:3333/orcamento", buttonClickData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then((response) => {
                console.log('resp = ', response);
            }).catch(function (error) {
                console.error(error)
                return error
            });
        } catch(error) {
            console.log('error = ', error)
        }
        
    }, [buttonClickData]);


    return (
        <>
            <ContainerBackground 
                title={text.title}
                description={text.description}
                isQuote
                handleClick={handleButtonClick}
            />
        </>
    );
}

export default QuotePage;