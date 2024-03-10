import RepositoryItem from '../RepositoryItem';
import Text from '../Text';
import { Pressable, StyleSheet, View } from 'react-native';
import theme from '../../theme';
import * as Linking from 'expo-linking';
import ItemSeparator from '../ItemSeparator';

const styles = StyleSheet.create({
    button: {
        backgroundColor: theme.colors.primary,
        paddingVertical: 15,
        paddingHorizontal: 8,
        marginBottom: 20,
        marginHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
    },
});

const RepositoryInfo = ({ repository }) => {
    return (
        <View>
            <RepositoryItem item={repository} />
            <Pressable onPress={() => Linking.openURL(repository.url)} style={styles.button}>
                <Text fontWeight="bold" color="textPrimary" fontSize="subheading">
                    Open in GitHub
                </Text>
            </Pressable>
            <ItemSeparator />
        </View>
    );
};

export default RepositoryInfo;
