/* eslint-disable react/prop-types */
import './ContainerBackground.scss';
import LogoImage from '../../assets/img/svg/logoImage.svg';
import ContentLanding from '../ContentLanding/ContentLanding';
import ContentLogin from '../ContentLogin/ContentLogin';
import ContentForgotPassword from '../ContentForgotPassword/ContentForgotPassword';

const ContainerBackground = ({ 
    isLanding,
    isLogin,
    isForgotPasswordPage,
    image, 
    titleBtn, 
    paragraph,
    titleRegistration,
    linkRedirectText,
    linkRedirectButton,
    title,
    forgotPasswordText,
    linkForgotPassword,
}) => {


    return (
        <div className="container">
            <div className="container__content">
                {isLanding && (
                    <ContentLanding 
                        image={image}
                        paragraph={paragraph}
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
                    />
                )}

                {isForgotPasswordPage && (
                    <ContentForgotPassword
                        title={title}
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