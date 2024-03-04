import { Pressable, StyleSheet } from 'react-native';
import Text from './Text';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
    container: {
        alignSelf: 'flex-start',
        padding: 10,
    },
});

const Navigation = ({ link, text, onPress }) => {
    if (link)
        return (
            <Link style={styles.container} to={`${link}`}>
                <Text fontWeight="bold" fontSize="subheading" color="textPrimary">
                    {text}
                </Text>
            </Link>
        );

    if (onPress)
        return (
            <Pressable style={styles.container} onPress={onPress}>
                <Text fontWeight="bold" fontSize="subheading" color="textPrimary">
                    {text}
                </Text>
            </Pressable>
        );
};

export default Navigation;
