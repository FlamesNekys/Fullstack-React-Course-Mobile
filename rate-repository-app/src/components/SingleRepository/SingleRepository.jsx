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
    const { repository, loading } = useRepository(id);

    if (loading) return <Text>Loading...</Text>;

    const reviews = repository ? repository.reviews.edges.map((edge) => edge.node) : [];

    return (
        <FlatList
            data={reviews}
            renderItem={({ item }) => <ReviewItem review={item} />}
            keyExtractor={({ id }) => id}
            ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
            ItemSeparatorComponent={ItemSeparator}
        />
    );
};

export default SingleRepository;
