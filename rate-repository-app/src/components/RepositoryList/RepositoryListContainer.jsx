import React from 'react';
import { FlatList, Pressable } from 'react-native';
import RepositoryItem from '../RepositoryItem';
import ItemSeparator from '../ItemSeparator';
import Sorting from './Sorting';

class RepositoryListContainer extends React.Component {
    renderHeader = () => <Sorting setFilter={this.props.setSearchQuery} setOrder={this.props.setOrder} />;

    render() {
        const repositoryNodes = this.props.repositories ? this.props.repositories.edges.map((edge) => edge.node) : [];

        return (
            <FlatList
                data={repositoryNodes}
                ItemSeparatorComponent={ItemSeparator}
                ListHeaderComponent={this.renderHeader}
                renderItem={({ item }) => (
                    <Pressable onPress={() => this.props.navigate(`/${item.id}`)}>
                        <RepositoryItem item={item} />
                    </Pressable>
                )}
                keyExtractor={({ id }) => id}
                onEndReached={this.props.onEndReached}
                onEndReachedThreshold={0.5}
            />
        );
    }
}

export default RepositoryListContainer;
