import { useNavigate } from 'react-router-native';
import useCreateReview from '../../hooks/useCreateReview';
import CreateReviewContainer from './CreateReviewContainer';

const CreateReview = () => {
    const [createReview] = useCreateReview();
    const navigate = useNavigate();

    const onSubmit = async (values) => {
        const { ownerName, repositoryName, rating, text } = values;

        try {
            const data = await createReview({ ownerName, repositoryName, rating: +rating, text });
            navigate(`/${data.createReview.repositoryId}`);
        } catch (error) {
            console.log(error);
        }
    };

    return <CreateReviewContainer onSubmit={onSubmit} />;
};

export default CreateReview;
