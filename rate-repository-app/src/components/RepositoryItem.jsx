import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';
import RepositoryStatistic from './RepositoryStatistic';

const styles = StyleSheet.create({
    image: {
        width: 60,
        height: 60,
        borderRadius: 5,
    },
    mainContainer: {
        padding: 20,
        flex: 1,
        flexDirection: 'row',
    },
    textContainer: {
        flex: 1,
        paddingLeft: 20,
        paddingTop: 5,
    },
    languageContainer: {
        backgroundColor: theme.colors.primary,
        borderRadius: 5,
        alignSelf: 'flex-start',
        padding: 5,
    },
});

const RepositoryItem = ({ item }) => {
    return (
        <View>
            <View style={styles.mainContainer}>
                <Image style={styles.image} src={item.ownerAvatarUrl} />
                <View style={styles.textContainer}>
                    <Text paddingBottom="pad" fontWeight="bold" color="textPrimary" fontSize="subheading">
                        {item.fullName}
                    </Text>
                    <Text paddingBottom="pad" color="textSecondary">
                        {item.description}
                    </Text>
                    <View style={styles.languageContainer}>
                        <Text color="textPrimary">{item.language}</Text>
                    </View>
                </View>
            </View>
            <RepositoryStatistic item={item} />
        </View>
    );
};

export default RepositoryItem;
