import useRepositories from '../../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';
import Text from '../Text';
import { useState } from 'react';
import { useNavigate } from 'react-router-native';
import { useDebounce } from 'use-debounce';

const RepositoryList = () => {
    const [orderBy, setOrderBy] = useState('CREATED_AT');
    const [orderDirection, setOrderDirection] = useState();
    const [searchQuery, setSearchQuery] = useState('');
    const [debouncedQuery] = useDebounce(searchQuery, 500);
    const navigate = useNavigate();

    const setOrder = (order) => {
        if (order === 'latest') {
            setOrderBy('CREATED_AT');
        }
        if (order === 'highest') {
            setOrderBy('RATING_AVERAGE');
            setOrderDirection('DESC');
        }
        if (order === 'lowest') {
            setOrderBy('RATING_AVERAGE');
            setOrderDirection('ASC');
        }
    };

    const { repositories, error, fetchMore } = useRepositories({
        first: 6,
        orderBy,
        orderDirection,
        searchKeyword: debouncedQuery,
    });

    if (error) return <Text>{error.message}</Text>;

    const onEndReached = () => {
        fetchMore();
        console.log('Fetching more repos...');
    };

    return (
        <RepositoryListContainer
            setSearchQuery={setSearchQuery}
            navigate={navigate}
            setOrder={setOrder}
            repositories={repositories}
            onEndReached={onEndReached}
        />
    );
};

export default RepositoryList;
