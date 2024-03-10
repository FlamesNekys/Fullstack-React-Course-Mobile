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
    ownerName: '',
    repositoryName: '',
    rating: '',
    text: '',
};

const validationSchema = yup.object().shape({
    ownerName: yup.string().required('Owner name is required'),
    repositoryName: yup.string().required('Repository name is required'),
    rating: yup
        .number()
        .moreThan(-1, 'Rating must be greater or equal to 0')
        .integer('Rating must be integer')
        .lessThan(101, 'Rating must be less or equal to 100')
        .required('Rating is required'),
});

const CreateReviewContainer = ({ onSubmit }) => {
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });

    return (
        <View style={styles.container}>
            <View style={formik.errors.ownerName ? styles.errorInputContainer : styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Repository owner name"
                    placeholderTextColor={theme.colors.textSecondary}
                    value={formik.values.ownerName}
                    onChangeText={formik.handleChange('ownerName')}
                />
                {formik.errors.ownerName && <Text color="error">{formik.errors.ownerName}</Text>}
            </View>
            <View style={formik.errors.repositoryName ? styles.errorInputContainer : styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Repository name"
                    placeholderTextColor={theme.colors.textSecondary}
                    value={formik.values.repositoryName}
                    onChangeText={formik.handleChange('repositoryName')}
                />
                {formik.errors.repositoryName && <Text color="error">{formik.errors.repositoryName}</Text>}
            </View>
            <View style={formik.errors.rating ? styles.errorInputContainer : styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Rating from 0 to 100"
                    placeholderTextColor={theme.colors.textSecondary}
                    value={formik.values.rating}
                    onChangeText={formik.handleChange('rating')}
                />
                {formik.errors.rating && <Text color="error">{formik.errors.rating}</Text>}
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Review"
                    placeholderTextColor={theme.colors.textSecondary}
                    value={formik.values.text}
                    onChangeText={formik.handleChange('text')}
                    multiline
                />
            </View>
            <Pressable style={styles.button} onPress={formik.handleSubmit}>
                <Text fontWeight="bold" fontSize="subheading">
                    Create a review
                </Text>
            </Pressable>
        </View>
    );
};

export default CreateReviewContainer;
