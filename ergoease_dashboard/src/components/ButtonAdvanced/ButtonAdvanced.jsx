import PropTypes from 'prop-types';
import './ButtonAdvanced.scss';

const ButtonAdvanced = ({ title }) => {

    return (
        <div className="container-button">
            <button 
                className="container-button__custom-button"
            >
                {title}
            </button>
        </div>
    );
}

// Define o tipo esperado e se é obrigatório
ButtonAdvanced.propTypes = {
    title: PropTypes.string.isRequired, 
};

export default ButtonAdvanced;