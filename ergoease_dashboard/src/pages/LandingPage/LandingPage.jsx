import './LandingPage.scss';
import Logo from '../../assets/img/svg/logo.svg';

import ContainerBackground from '../../components/ContainerBackground/ContainerBackground';

const LandingPage = () => {

    const description = [
        ['O sistema ErgoEase torna o ambiente de trabalho mais confortável e saudável, priorizando a ergonomia.'],
        ['Cadastre sua empresa e saiba mais...']
    ]

    return (
        <>
            <ContainerBackground 
                isLanding
                image={Logo}
                titleBtn="Solicitar Orçamento"
                description={description}
                titleRegistration="Já possuí cadastro? Faça Login"
                linkRedirectText="/login"
                linkRedirectButton="/quote"
            />
        </>

    );
};

export default LandingPage;