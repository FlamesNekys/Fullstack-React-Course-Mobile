import useRepositories from '../../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';
import Text from '../Text';
import { useState } from 'react';
import { useNavigate } from 'react-router-native';
import { useDebounce } from 'use-debounce';

const RepositoryList = () => {
    const [orderBy, setOrderBy] = useState('CREATED_AT');
    const [orderDirection, setOrderDirection] = useState('DESC');
    const [searchQuery, setSearchQuery] = useState('');
    const [debouncedQuery] = useDebounce(searchQuery, 500);
    const navigate = useNavigate();

    const setOrder = (order) => {
        if (order === 'latest') {
            setOrderBy('CREATED_AT');
            setOrderDirection('DESC');
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

    const { repositories, error } = useRepositories(orderBy, orderDirection, debouncedQuery);

    if (error) return <Text>{error.message}</Text>;

    return (
        <RepositoryListContainer
            setSearchQuery={setSearchQuery}
            navigate={navigate}
            setOrder={setOrder}
            repositories={repositories}
        />
    );
};

export default RepositoryList;
