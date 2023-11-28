/* eslint-disable react/prop-types */
import './ContainerBackground.scss';
import LogoImage from '../../assets/img/svg/logoImage.svg';
import ContentLanding from '../ContentLanding/ContentLanding';
import ContentLogin from '../ContentLogin/ContentLogin';
import ContentForgotPassword from '../ContentForgotPassword/ContentForgotPassword';
import ContentQuote from '../ContentQuote/ContentQuote';
import ContentRegister from '../ContentRegister/ContentRegister';

const ContainerBackground = ({ 
    isLanding,
    isLogin,
    isForgotPasswordPage,
    isQuote,
    isRegister,
    image, 
    titleBtn, 
    description,
    titleRegistration,
    linkRedirectText,
    linkRedirectButton,
    title,
    forgotPasswordText,
    linkForgotPassword,
    handleClick
}) => {


    return (
        <div className="container">
            <div className="container__content">
                {isLanding && (
                    <ContentLanding 
                        image={image}
                        paragraph={description}
                        titleButton={titleBtn}
                        linkRedirectText={linkRedirectText}
                        linkRedirectButton={linkRedirectButton}
                        titleRegistration={titleRegistration}
                    />
                )}

                {isLogin && (
                    <ContentLogin 
                        title={title}
                        forgotPasswordText={forgotPasswordText}
                        linkForgotPassword={linkForgotPassword}
                        handleClick={handleClick}
                    />
                )}

                {isForgotPasswordPage && (
                    <ContentForgotPassword
                        title={title}
                    />
                )}

                {isQuote && (
                    <ContentQuote 
                        title={title}
                        description={description}
                        handleClick={handleClick}
                    />
                )}

                {isRegister && (
                    <ContentRegister 
                        title={title}
                        handleClick={handleClick}
                    />
                )}

            </div>
            <div className="container__image-logo">
                <img src={LogoImage} alt="Imagem logo principal" />
            </div>
        </div>
    );
}

export default ContainerBackground;