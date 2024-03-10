import { StyleSheet, View } from 'react-native';
import Text from '../Text';

const styles = StyleSheet.create({
    mainContainer: {
        paddingBottom: 17,
        flex: 1,
        flexDirection: 'row',
    },
    statContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
});

const thousandCount = (count) => {
    if (count < 1000) return count;

    const thousands = count / 1000;
    return `${thousands.toFixed(1)}k`;
};

const RepositoryStatistic = ({ item }) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.statContainer}>
                <Text paddingBottom="s" fontSize="subheading" fontWeight="bold">
                    {thousandCount(item.stargazersCount)}
                </Text>
                <Text color="textSecondary">Stars</Text>
            </View>
            <View style={styles.statContainer}>
                <Text paddingBottom="s" fontSize="subheading" fontWeight="bold">
                    {thousandCount(item.forksCount)}
                </Text>
                <Text color="textSecondary">Forks</Text>
            </View>
            <View style={styles.statContainer}>
                <Text paddingBottom="s" fontSize="subheading" fontWeight="bold">
                    {thousandCount(item.reviewCount)}
                </Text>
                <Text color="textSecondary">Reviews</Text>
            </View>
            <View style={styles.statContainer}>
                <Text paddingBottom="s" fontSize="subheading" fontWeight="bold">
                    {thousandCount(item.ratingAverage)}
                </Text>
                <Text color="textSecondary">Rating</Text>
            </View>
        </View>
    );
};

export default RepositoryStatistic;
