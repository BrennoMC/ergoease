/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import './ButtonAdvanced.scss';
import { Link } from 'react-router-dom';

const ButtonAdvanced = ({ 
    title, 
    linkRedirectButton,
    classNameProps, 
    isDisabled,
    handleClick,
    type,
}) => {

    return (
        <div className={classNameProps ?? `container-button`}>
            <button 
                className={`container-button__custom-button`}
                disabled={isDisabled}
                onClick={handleClick}
                type={type}
            >
                {linkRedirectButton ? (
                    <Link to={linkRedirectButton}>{title}</Link>
                ): (
                    title
                )}
            </button>
        </div>
    );
}

// Define o tipo esperado e se é obrigatório
ButtonAdvanced.propTypes = {
    title: PropTypes.string.isRequired, 
};

export default ButtonAdvanced;