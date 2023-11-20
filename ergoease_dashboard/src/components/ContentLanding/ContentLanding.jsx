/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import ButtonAdvanced from '../ButtonAdvanced/ButtonAdvanced';
import './ContentLanding.scss';

const ContentLanding = ({
    image,
    paragraph,
    titleButton,
    linkRedirectText,
    linkRedirectButton,
    titleRegistration,
}) => {
    const textLink = titleRegistration && titleRegistration.slice(20);
    const textRegistration = titleRegistration && titleRegistration.slice(0, 20);

    return (
        <div className="content-landing">
            {image && (
                <img 
                    src={image} 
                    alt="Logo da empresa" 
                    className="content-landing__logo"
                />
            )}

            {paragraph && paragraph.length > 0 && paragraph.map((item, index) => (
                <p key={index}>
                    <br />{item}
                </p>
            ))}

            {titleButton && (
                <ButtonAdvanced 
                    title={titleButton}
                    linkRedirectButton={linkRedirectButton} 
                />
            )}

            {linkRedirectText && (
                <div className="content-landing__redirect">
                    <Link to={linkRedirectText}>
                        <span className="content-landing__redirect__text-one">{textRegistration}</span>
                        <span className="content-landing__redirect__text-two">{textLink}</span>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default ContentLanding;