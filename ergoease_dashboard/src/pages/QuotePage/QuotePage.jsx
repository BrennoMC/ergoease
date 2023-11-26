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
            axios.post('http://localhost:3333/orcamento', buttonClickData)
                .then(function (res) {

                console.log(res)

                if(res.status = 200) {
                    console.log("Recebemos seu email! Aguarde que entraremos em contato o mais breve possível")
                    alert("Recebemos seu email! Aguarde que entraremos em contato o mais breve possível")
                }
                //return response.data
                //return JSON.stringify(response.data)

                })
                .catch(function (error) {
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