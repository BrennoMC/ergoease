/* eslint-disable react/prop-types */
import './ContainerBackground.scss';
import LogoImage from '../../assets/img/svg/logoImage.svg';
import ButtonAdvanced from '../ButtonAdvanced/ButtonAdvanced';
import { Link } from 'react-router-dom';

const ContainerBackground = ({ 
    image, 
    titleBtn, 
    paragraph,
    titleRegistration,
    linkRedirectText,
    linkRedirectButton,
}) => {
    const textLink = titleRegistration.slice(20);
    const textRegistration = titleRegistration.slice(0, 20);

    return (
        <div className="container">
            <div className="container__content">
                <div className="container__content__content-info">
                    <img 
                        src={image} 
                        alt="Logo da empresa" 
                        className="container__content__content-info__logo"
                    />
                    {paragraph && paragraph.length > 0 && paragraph.map((item, index) => (
                        <p key={index}>
                            <br />{item}
                        </p>
                    ))}

                    {titleBtn && (
                        <ButtonAdvanced 
                            title={titleBtn}
                            linkRedirectButton={linkRedirectButton} 
                        />
                    )}

                    {linkRedirectText && (
                        <div className="container__content__content-info__redirect">
                            <Link to={linkRedirectText}>
                                <span className="container__content__content-info__redirect__text-one">{textRegistration}</span>
                                <span className="container__content__content-info__redirect__text-two">{textLink}</span>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
            <div className="container__image-logo">
                <img src={LogoImage} alt="Imagem logo principal" />
            </div>
        </div>
    );
}

export default ContainerBackground;