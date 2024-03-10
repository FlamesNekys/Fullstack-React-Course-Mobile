import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList/RepositoryList';
import AppBar from './AppBar/AppBar';
import { Navigate, Route, Routes } from 'react-router-native';
import SignIn from './SignIn/SignIn';
import theme from '../theme';
import SingleRepository from './SingleRepository/SingleRepository';
import CreateReview from './CreateReview/CreateReview';
import SignUp from './SignUp/SignUp';
import MyReviews from './MyReviews/MyReviews';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
        backgroundColor: theme.colors.main,
    },
});

const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar />
            <Routes>
                <Route path="/" element={<RepositoryList />} />
                <Route path="*" element={<Navigate to="/" replace />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/:id" element={<SingleRepository />} />
                <Route path="/create-review" element={<CreateReview />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/my-reviews" element={<MyReviews />} />
            </Routes>
        </View>
    );
};

export default Main;
