// api
import axios from './apis';

const UserOpinion = {
    async getAgencyComfort() {
        const response = await axios.get('/main/review/');
        return response.data;
    },
};

export default UserOpinion;
