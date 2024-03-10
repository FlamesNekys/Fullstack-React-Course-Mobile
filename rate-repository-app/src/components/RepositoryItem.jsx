import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';
import RepositoryStatistic from './RepositoryList/RepositoryStatistic';

const styles = StyleSheet.create({
    image: {
        width: 60,
        height: 60,
        borderRadius: 5,
    },
    mainContainer: {
        padding: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    textContainer: {
        flex: 1,
        paddingLeft: 30,
        paddingTop: 5,
    },
    languageContainer: {
        backgroundColor: theme.colors.primary,
        borderRadius: 5,
        alignSelf: 'flex-start',
        padding: 6.5,
    },
});

const RepositoryItem = ({ item }) => {
    return (
        <View testID="repositoryItem">
            <View style={styles.mainContainer}>
                <Image style={styles.image} src={item.ownerAvatarUrl} />
                <View style={styles.textContainer}>
                    <Text paddingBottom="s" fontWeight="bold" color="textPrimary" fontSize="subheading">
                        {item.fullName}
                    </Text>
                    <Text paddingBottom="body" color="textSecondary">
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
