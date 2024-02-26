import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import Navigation from './Navigation';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        paddingBottom: 20,
        paddingLeft: 20,
        backgroundColor: theme.colors.appBar,
    },
});

const AppBar = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal>
                <Navigation text="Repositories" link="/" />
                <Navigation text="Sign in" link="/sign-in" />
            </ScrollView>
        </View>
    );
};

export default AppBar;
