import { StyleSheet, View } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
    mainContainer: {
        padding: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
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
                <Text paddingBottom="pad" fontSize="subheading" fontWeight="bold">
                    {thousandCount(item.stargazersCount)}
                </Text>
                <Text fontSize="subheading" color="textSecondary">
                    Stars
                </Text>
            </View>
            <View style={styles.statContainer}>
                <Text paddingBottom="pad" fontSize="subheading" fontWeight="bold">
                    {thousandCount(item.forksCount)}
                </Text>
                <Text fontSize="subheading" color="textSecondary">
                    Forks
                </Text>
            </View>
            <View style={styles.statContainer}>
                <Text paddingBottom="pad" fontSize="subheading" fontWeight="bold">
                    {thousandCount(item.reviewCount)}
                </Text>
                <Text fontSize="subheading" color="textSecondary">
                    Reviews
                </Text>
            </View>
            <View style={styles.statContainer}>
                <Text paddingBottom="pad" fontSize="subheading" fontWeight="bold">
                    {thousandCount(item.ratingAverage)}
                </Text>
                <Text fontSize="subheading" color="textSecondary">
                    Rating
                </Text>
            </View>
        </View>
    );
};

export default RepositoryStatistic;
