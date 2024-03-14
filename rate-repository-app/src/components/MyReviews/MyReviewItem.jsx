import { Alert, Pressable, StyleSheet, View } from 'react-native';
import ReviewItem from '../ReviewItem';
import Text from '../Text';
import theme from '../../theme';
import { useNavigate } from 'react-router-native';
import { useMutation } from '@apollo/client';
import { DELETE_REVIEW } from '../../graphql/mutations';

const styles = StyleSheet.create({
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    buttonView: {
        backgroundColor: theme.colors.primary,
        padding: 16,
        borderRadius: 7,
    },
    buttonDelete: {
        backgroundColor: theme.colors.error,
        padding: 16,
        borderRadius: 7,
    },
});

const MyReviewItem = ({ review, refetch }) => {
    const navigate = useNavigate();
    const [mutate] = useMutation(DELETE_REVIEW, {
        variables: { deleteReviewId: review.id },
    });

    const onDelete = () => {
        Alert.alert('Delete review', 'Are you sure you want to delete this review?', [
            {
                text: 'Cancel',
                style: 'cancel',
            },
            {
                text: 'Delete',
                onPress: async () => {
                    await mutate();
                    refetch();
                },
                style: 'destructive',
            },
        ]);
    };

    return (
        <View>
            <ReviewItem review={review} />
            <View style={styles.buttonsContainer}>
                <Pressable onPress={() => navigate(`/${review.repositoryId}`)} style={styles.buttonView}>
                    <Text fontWeight="bold" fontSize="subheading">
                        View repository
                    </Text>
                </Pressable>
                <Pressable onPress={onDelete} style={styles.buttonDelete}>
                    <Text fontWeight="bold" fontSize="subheading">
                        Delete review
                    </Text>
                </Pressable>
            </View>
        </View>
    );
};

export default MyReviewItem;
