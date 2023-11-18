/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import './ButtonAdvanced.scss';
import { Link } from 'react-router-dom';

const ButtonAdvanced = ({ title, linkRedirectButton }) => {

    return (
        <div className="container-button">
            <button 
                className="container-button__custom-button"
            >
                <Link to={linkRedirectButton}>{title}</Link>
            </button>
        </div>
    );
}

// Define o tipo esperado e se é obrigatório
ButtonAdvanced.propTypes = {
    title: PropTypes.string.isRequired, 
};

export default ButtonAdvanced;