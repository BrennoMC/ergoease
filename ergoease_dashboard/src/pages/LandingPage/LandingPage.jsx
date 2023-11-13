import './LandingPage.scss';
import Logo from '../../assets/img/svg/logo.svg';
import LogoPartOne from '../../assets/img/svg/logo_part1.svg';
import LogoPartTwo from '../../assets/img/svg/logo_part2.svg';
import ButtonAdvanced from '../../components/ButtonAdvanced/ButtonAdvanced';

const LandingPage = () => {
    return (
        <div className="container">
            
            <div className="container__content-left">
                <div className="container__content-left__content-info">
                    <img 
                        src={Logo} 
                        alt="Logo da empresa" 
                        className="container__content-left__content-info__logo"
                    />
                    <p>
                        <br /><br />O sistema ErgoEase torna o ambiente de trabalho mais 
                        confortável e saudável, priorizando a ergonomia. <br />
                        <br />Cadastre sua empresa e saiba mais...
                    </p>
                    <ButtonAdvanced title="Solicitar Orçamento" />
                </div>
                <div className="container__content-left__logo-part-one">
                    <img src={LogoPartOne} alt="Formas geométricas a esquerda" />
                </div>
            </div>
            <div className="container__content-right">
                <img 
                    src={LogoPartTwo} 
                    alt="Formas geométricas a direita" 
                    className="container__content-right__logo-part-two"
                />
            </div>
        </div>
    );
};

export default LandingPage;