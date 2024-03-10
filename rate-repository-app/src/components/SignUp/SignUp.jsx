import useSignIn from '../../hooks/useSignIn';
import useSignUp from '../../hooks/useSignUp';
import { useNavigate } from 'react-router-native';
import SignUpContainer from './SignUpContainer';

const SignUp = () => {
    const [signIn] = useSignIn();
    const [signUp] = useSignUp();
    const navigate = useNavigate();

    const onSubmit = async (values) => {
        const { username, password } = values;

        try {
            const { createUser } = await signUp({ username, password });
            console.log(createUser);
            const { authenticate } = await signIn({ username, password });
            console.log(authenticate);
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

    return <SignUpContainer onSubmit={onSubmit} />;
};

export default SignUp;
