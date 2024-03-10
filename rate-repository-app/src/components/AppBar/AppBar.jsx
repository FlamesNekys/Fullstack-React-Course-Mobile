import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../../theme';
import Navigation from './Navigation';
import { useApolloClient, useQuery } from '@apollo/client';
import { ME } from '../../graphql/queries';
import useAuthStorage from '../../hooks/useAuthStorage';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        paddingBottom: 10,
        paddingLeft: 10,
        backgroundColor: theme.colors.appBar,
    },
});

const AppBar = () => {
    const authStorage = useAuthStorage();
    const { data } = useQuery(ME, {
        fetchPolicy: 'cache-and-network',
    });
    const apolloClient = useApolloClient();

    const onSignOut = async () => {
        await authStorage.removeAccessToken();
        apolloClient.resetStore();
    };

    return (
        <View style={styles.container}>
            <ScrollView horizontal>
                <Navigation text="Repositories" link="/" />
                {data && data.me ? (
                    <>
                        <Navigation text="Create a review" link="/create-review" />
                        <Navigation text="My reviews" link="/my-reviews" />
                        <Navigation text="Sign out" onPress={onSignOut} link="/" />
                    </>
                ) : (
                    <>
                        <Navigation text="Sign in" link="/sign-in" />
                        <Navigation text="Sign up" link="/sign-up" />
                    </>
                )}
            </ScrollView>
        </View>
    );
};

export default AppBar;
