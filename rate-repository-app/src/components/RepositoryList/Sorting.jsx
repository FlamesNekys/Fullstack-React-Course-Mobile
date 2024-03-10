import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import theme from '../../theme';
import { StyleSheet, View } from 'react-native';
import { Searchbar } from 'react-native-paper';

const styles = StyleSheet.create({
    text: {
        color: theme.colors.textPrimary,
    },
    searchBar: {
        backgroundColor: theme.colors.appBar,
        color: theme.colors.textPrimary,
        marginTop: 30,
        marginHorizontal: 20,
    },
});

const Sorting = ({ setOrder, setFilter }) => {
    const [view, setView] = useState();
    const [searchQuery] = useState();

    return (
        <View>
            <Searchbar
                style={styles.searchBar}
                placeholder="Search"
                onChangeText={setFilter}
                value={searchQuery}
                placeholderTextColor={theme.colors.textSecondary}
                inputStyle={styles.text}
            />
            <Picker
                itemStyle={styles.text}
                selectedValue={view}
                onValueChange={(value) => {
                    setView(value);
                    setOrder(value);
                }}
            >
                <Picker.Item label="Select an item..." enabled={false} style={{ color: theme.colors.textSecondary }} />
                <Picker.Item label="Latest repositories" value="latest" />
                <Picker.Item label="Highest rated repositories" value="highest" />
                <Picker.Item label="Lowest rated repositories" value="lowest" />
            </Picker>
        </View>
    );
};

export default Sorting;
