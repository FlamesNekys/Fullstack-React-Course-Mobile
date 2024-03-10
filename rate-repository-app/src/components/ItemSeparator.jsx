import { StyleSheet, View } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
    separator: {
        height: 10,
        backgroundColor: theme.colors.separator,
    },
});

const ItemSeparator = () => <View style={styles.separator} />;

export default ItemSeparator;
