import React from 'react';
import { StyleSheet, View } from 'react-native';
import Text from './Text';
import { format } from 'date-fns';
import theme from '../theme';

const styles = StyleSheet.create({
    container: {
        padding: 15,
        flexDirection: 'row',
    },
    rating: {
        display: 'flex',
        height: 60,
        width: 60,
        borderWidth: 2.5,
        borderRadius: 30,
        borderColor: theme.colors.primary,
        marginRight: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    info: {
        paddingVertical: 6,
        flex: 1,
    },
});

const ReviewItem = ({ review }) => {
    return (
        <View style={styles.container}>
            <View style={styles.rating}>
                <Text fontWeight="bold" fontSize="rating" color="primary">
                    {review.rating}
                </Text>
            </View>
            <View style={styles.info}>
                <Text paddingBottom="s" fontSize="subheading" fontWeight="bold">
                    {review.user.username}
                </Text>
                <Text paddingBottom="body" color="textSecondary">
                    {format(review.createdAt, 'MM.dd.yyyy')}
                </Text>
                <Text>{review.text}</Text>
            </View>
        </View>
    );
};

export default ReviewItem;
