import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import Text from '../Text';
import { useFormik } from 'formik';
import theme from '../../theme';
import * as yup from 'yup';

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.separator,
    },
    inputContainer: {
        borderWidth: 2,
        height: 65,
        marginHorizontal: 25,
        marginTop: 20,
        marginBottom: 10,
        borderRadius: 5,
        borderColor: theme.colors.textSecondary,
        color: theme.colors.textPrimary,
    },
    input: {
        height: 65,
        paddingHorizontal: 15,
        color: theme.colors.textPrimary,
        marginBottom: 8,
    },
    button: {
        alignSelf: 'stretch',
        backgroundColor: theme.colors.primary,
        marginHorizontal: 25,
        marginVertical: 20,
        borderRadius: 5,
        paddingVertical: 19,
        alignItems: 'center',
    },
    errorInputContainer: {
        borderWidth: 2,
        height: 65,
        marginHorizontal: 25,
        marginTop: 20,
        marginBottom: 25,
        borderRadius: 5,
        borderColor: theme.colors.error,
        color: theme.colors.textPrimary,
    },
});

const initialValues = {
    username: '',
    password: '',
    passwordConfirm: '',
};

const validationSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
    passwordConfirm: yup
        .string()
        .oneOf([yup.ref('password'), null], `Passwords don't match, please try again`)
        .required('Password confirm is required'),
});

const SignUpContainer = ({ onSubmit }) => {
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });

    return (
        <View style={styles.container}>
            <View style={formik.errors.username ? styles.errorInputContainer : styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    placeholderTextColor={theme.colors.textSecondary}
                    value={formik.values.username}
                    onChangeText={formik.handleChange('username')}
                />
                {formik.errors.username && <Text color="error">{formik.errors.username}</Text>}
            </View>
            <View style={formik.errors.password ? styles.errorInputContainer : styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor={theme.colors.textSecondary}
                    value={formik.values.password}
                    onChangeText={formik.handleChange('password')}
                    secureTextEntry
                />
                {formik.errors.password && <Text color="error">{formik.errors.password}</Text>}
            </View>
            <View style={formik.errors.passwordConfirm ? styles.errorInputContainer : styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Confirm the password"
                    placeholderTextColor={theme.colors.textSecondary}
                    value={formik.values.passwordConfirm}
                    onChangeText={formik.handleChange('passwordConfirm')}
                    secureTextEntry
                />
                {formik.errors.passwordConfirm && <Text color="error">{formik.errors.passwordConfirm}</Text>}
            </View>
            <Pressable style={styles.button} onPress={formik.handleSubmit}>
                <Text fontWeight="bold" fontSize="subheading">
                    Sign up
                </Text>
            </Pressable>
        </View>
    );
};

export default SignUpContainer;
