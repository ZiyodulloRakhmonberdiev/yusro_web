// api
import axios from './apis';

const QuestionsByUser = {
    async getQuestionsByUser() {
        const response = await axios.get('/main/question/');
        return response.data;
    },
};

export default QuestionsByUser;
