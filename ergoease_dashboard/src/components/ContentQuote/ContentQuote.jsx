/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './ContentQuote.scss';
import ButtonAdvanced from '../ButtonAdvanced/ButtonAdvanced';


const ContentQuote = ({
    title,
    description,
    handleClick,
}) => {

    const selectOptions = [
        { value: '10 à 50 funcionários', label: '10 à 50 funcionários' },
        { value: '51 à 100 funcionários', label: '51 à 100 funcionários', },
        { value: '101 à 200 funcionários', label: '101 à 200 funcionários', },
        { value: 'Acima de 200 funcionários', label: 'Acima de 200 funcionários', }
    ];

    const handleRegistration = (data) => {
        handleClick(data);
    };

    const handleError = () => {};

    const registerOptions = {
        name: { required: "Nome é obrigatório" },
        email: { required: "Email é obrigatório" },
        phoneNumber: { required: "Telefone é obrigatório"},
        sizeCompany: { required: 'Tamanho da empresa é obrigatório'}
    };

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onBlur'
    });

    function handleSelect(e) {
        handleSubmit(e.target.value)
    }

    const [acceptTerms, setAcceptTerms] = useState(false);

    return (
        <div className="content-quote">
            <div className="content-quote__header-quote">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>

            <form onSubmit={handleSubmit(handleRegistration, handleError)}>
                <div className="content-quote__form-inputs">
                    <div className="content-quote__name-input">
                        <label>Nome da empresa: </label>
                        <input
                            name="name" 
                            {...register("name", registerOptions.name)}
                            type="text"
                        />
                        {errors?.name && (<p style={{ color: 'red', fontSize: '12px'}}>{errors.name.message}</p>)}
                    </div>
                    <div className="content-quote__phone-input">
                        <label>Telefone: </label>
                        <input 
                            name="phoneNumber"
                            {...register("phoneNumber", registerOptions.phoneNumber)}
                            type="tel"                     
                        />
                        {errors.phoneNumber && (<p style={{ color: 'red', fontSize: '12px'}}>{errors.phoneNumber.message}</p>)}
                    </div>
                    <div className="content-quote__size-company">
                        <label>Tamanho da empresa: </label>
  
                        <select 
                            onChange={handleSelect}
                            {...register("sizeCompany", registerOptions.sizeCompany)}
                        >
                            <option value="" selected disabled hidden>Selecione uma opção</option>
                            {selectOptions.map((item, index) => (
                                <option key={index} value={item.value}>{item.label}</option>
                            ))}
                        </select>

                        {errors?.sizeCompany && (<p style={{ color: 'red', fontSize: '12px'}}>{errors.sizeCompany.message}</p>)}
                    </div>
                    <div className="content-quote__email-input">
                        <label>Email: </label>
                        <input 
                            name="email"
                            {...register("email", registerOptions.email)}
                            type="email"
                        />
                        {errors?.email && (<p style={{ color: 'red', fontSize: '12px', marginTop: '5px'}}>{errors.email.message}</p>)}
                    </div>    
                </div>

                <div className="content-quote__form-inputs__form-header">
                    <p>Consulte a <span>Política de Privacidade</span> para obter mais detalhes.</p>

                    <ButtonAdvanced 
                        title="Enviar"
                        isDisabled={acceptTerms ? true : false}
                        type="submit"
                        classNameProps="send-quote"
                    />

                </div>
            </form>

            <div className="content-quote__accept-terms">
                <input 
                    type="checkbox" 
                    checked={acceptTerms}
                    onChange={() => setAcceptTerms(!acceptTerms)}
                    
                />
                <label>Ao clicar em “Enviar”, eu concordo que li e aceitei os Termos de Uso.</label>
            </div>
        </div>
    );
}

export default ContentQuote;