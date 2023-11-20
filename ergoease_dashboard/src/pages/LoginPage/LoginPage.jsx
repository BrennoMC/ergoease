import ContainerBackground from '../../components/ContainerBackground/ContainerBackground';

const LoginPage = () => {
    return (
        <>
            <ContainerBackground 
                title="Login"
                isLogin
                forgotPasswordText="Esqueci a senha"
                linkForgotPassword="/forgot-password"
            />
        </>
    );
}

export default LoginPage;