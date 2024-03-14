import React from 'react';
import useRepository from '../../hooks/useRepository';
import { useParams } from 'react-router-native';
import { FlatList } from 'react-native';
import ReviewItem from '../ReviewItem';
import RepositoryInfo from './RepositoryInfo';
import ItemSeparator from '../ItemSeparator';
import Text from '../Text';

const SingleRepository = () => {
    const { id } = useParams();
    const { repository, error, fetchMore } = useRepository({ repositoryId: id, first: 5 });

    if (error) return <Text>{error.message}</Text>;

    const reviews = repository ? repository.reviews.edges.map((edge) => edge.node) : [];

    const onEndReached = () => {
        fetchMore();
        console.log('Fetching more reviews...');
    };

    return (
        <FlatList
            data={reviews}
            renderItem={({ item }) => <ReviewItem review={item} />}
            keyExtractor={({ id }) => id}
            ListHeaderComponent={() => repository && <RepositoryInfo repository={repository} />}
            ItemSeparatorComponent={ItemSeparator}
            onEndReached={onEndReached}
            onEndReachedThreshold={0.5}
        />
    );
};

export default SingleRepository;
