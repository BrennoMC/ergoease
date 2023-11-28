/* eslint-disable react/prop-types */

import { useForm } from "react-hook-form";
import ButtonAdvanced from "../ButtonAdvanced/ButtonAdvanced";
import './ContentRegister.scss';


const ContentRegister = ({
    title,
    handleClick,
}) => {

    const registerOptions = {
        cnpj: { required: "CNPJ é obrigatório"},
        email: { required: "Email é obrigatório" },
        fantasyName: { required: 'Nome fantsia é obrigatório'},
        password: { required: "Senha é obrigatório" },
        phoneNumber: { required: "Telefone é obrigatório"},
        address: {
            street: { required: "Rua é obrigatório "},
            number: { required: "Número é obrigatório" },
            neighborhood: { required: "Bairro é obrigatório" },
            city: { required: "Cidade é obrigatório" },
            state: { required: "Estado é obrigatório" },
            cep: { required: "CEP é obrigatório" },
        }
    };

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onBlur'
    });

    const handleRegistration = (data) => {
        handleClick(data);
    };

    const handleError = () => {};

    return (
        <div className="content-register">
            <h1>{title}</h1>

            <form onSubmit={handleSubmit(handleRegistration, handleError)}>
                <div className="content-register__form-inputs">
                    <div className="content-register__form-inputs__first-infos">
                        <div className="content-register__form-inputs__first-infos__fantasy-name-input">
                            <label>Nome fantasia</label>
                            <input 
                                name="fantasyName"
                                {...register("fantasyName", registerOptions.fantasyName)}
                                type="text"                     
                            />
                            {errors.fantasyName && (<p style={{ color: 'red', fontSize: '12px'}}>{errors.fantasyName.message}</p>)}
                        </div>
                        <div className="content-register__form-inputs__first-infos__cnpj-input">
                            <label>CNPJ</label>
                            <input
                                name="cnpj" 
                                {...register("cnpj", registerOptions.cnpj)}
                                type="text"
                            />
                            {errors?.cnpj && (<p style={{ color: 'red', fontSize: '12px'}}>{errors.cnpj.message}</p>)}
                        </div>
                    </div>

                    <div className="content-register__form-inputs__second-infos">
                        <div className="content-register__form-inputs__second-infos__email-input">
                            <label>Email: </label>
                            <input 
                                name="email"
                                {...register("email", registerOptions.email)}
                                type="email"
                            />
                            {errors?.email && (<p style={{ color: 'red', fontSize: '12px', marginTop: '5px'}}>{errors.email.message}</p>)}
                        </div>    
                        <div className="content-register__form-inputs__second-infos__password-input">
                            <label>Senha</label>
                            <input 
                                name="password"
                                {...register("password", registerOptions.password)}
                                type="password"
                            />
                            {errors?.password && (<p style={{ color: 'red', fontSize: '12px', marginTop: '5px'}}>{errors.password.message}</p>)}
                        </div>     
                    </div>

                    <div className="content-register__form-inputs__third-infos">  
                        <div className="content-register__form-inputs__second-infos__phone-input">
                            <label>Telefone</label>
                            <input 
                                name="phoneNumber"
                                {...register("phoneNumber", registerOptions.phoneNumber)}
                                type="tel"
                            />
                            {errors?.phoneNumber && (<p style={{ color: 'red', fontSize: '12px', marginTop: '5px'}}>{errors.phoneNumber.message}</p>)}
                        </div>   
                        <div className="content-register__form-inputs__second-infos__cep-input">
                            <label>CEP</label>
                            <input 
                                name="cep"
                                {...register("cep", registerOptions.address.cep)}
                                type="text"
                            />
                            {errors?.cep && (<p style={{ color: 'red', fontSize: '12px', marginTop: '5px'}}>{errors.cep.message}</p>)}
                        </div>    
                    </div>

                    <div className="content-register__form-inputs__fourth-infos">
                        <div className="content-register__form-inputs__third-infos__street-input">
                            <label>Rua</label>
                            <input 
                                name="street"
                                {...register("street", registerOptions.address.street)}
                                type="text"
                            />
                            {errors?.street && (<p style={{ color: 'red', fontSize: '12px', marginTop: '5px'}}>{errors.street.message}</p>)}
                        </div>   
                        <div className="content-register__form-inputs__third-infos__number-input">
                            <label>Número</label>
                            <input 
                                name="number"
                                {...register("number", registerOptions.address.number)}
                                type="text"
                            />
                            {errors?.number && (<p style={{ color: 'red', fontSize: '12px', marginTop: '5px'}}>{errors.number.message}</p>)}
                        </div>   
                    </div>

                    <div className="content-register__form-inputs__fifth-info">

                        <div className="content-register__form-inputs__fourth-infos__neighborhood-input">
                            <label>Bairro</label>
                            <input 
                                name="neighborhood"
                                {...register("neighborhood", registerOptions.address.neighborhood)}
                                type="text"
                            />
                            {errors?.neighborhood && (<p style={{ color: 'red', fontSize: '12px', marginTop: '5px'}}>{errors.neighborhood.message}</p>)}
                        </div>   
                        <div className="content-register__form-inputs__fourth-infos__city-input">
                            <label>Cidade</label>
                            <input 
                                name="city"
                                {...register("city", registerOptions.address.city)}
                                type="text"
                            />
                            {errors?.city && (<p style={{ color: 'red', fontSize: '12px', marginTop: '5px'}}>{errors.city.message}</p>)}
                        </div>   
                        <div className="content-register__form-inputs__fourth-infos__state-input">
                            <label>Estado</label>
                            <input 
                                name="state"
                                {...register("state", registerOptions.address.state)}
                                type="text"
                            />
                            {errors?.state && (<p style={{ color: 'red', fontSize: '12px', marginTop: '5px'}}>{errors.state.message}</p>)}
                        </div>  
                    </div>
                </div>

                <ButtonAdvanced 
                    title="Enviar"
                    type="submit"
                />

            </form>
        </div>
    );
}

export default ContentRegister;