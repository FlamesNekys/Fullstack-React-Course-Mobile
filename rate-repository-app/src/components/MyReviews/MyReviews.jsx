import React from 'react';
import useUserReviews from '../../hooks/useUserReviews';
import { FlatList } from 'react-native';
import ItemSeparator from '../ItemSeparator';
import MyReviewItem from './MyReviewItem';

const MyReviews = () => {
    const { reviews, refetch } = useUserReviews();

    const reviewsNodes = reviews ? reviews.edges.map((edge) => edge.node) : [];

    return (
        <FlatList
            data={reviewsNodes}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item }) => <MyReviewItem refetch={refetch} review={item} />}
            keyExtractor={({ id }) => id}
        />
    );
};

export default MyReviews;
