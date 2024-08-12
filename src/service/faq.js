// api
import axios from './api';

const QuestionsByUser = {
    async getQuestionsByUser() {
        const response = await axios.get('/company/questions/');
        return response.data;
    },
};

export default QuestionsByUser;
