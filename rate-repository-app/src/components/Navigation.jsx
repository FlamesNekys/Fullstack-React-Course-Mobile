import { StyleSheet } from 'react-native';
import Text from './Text';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
    container: {
        alignSelf: 'flex-start',
        padding: 10,
    },
});

const Navigation = ({ link, text }) => {
    return (
        <Link style={styles.container} to={`${link}`}>
            <Text fontWeight="bold" fontSize="subheading" color="textPrimary">
                {text}
            </Text>
        </Link>
    );
};

export default Navigation;
