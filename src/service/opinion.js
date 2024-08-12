// api
import axios from './api';

const UserOpinion = {
    async getAgencyComfort() {
        const response = await axios.get('/company/testimonials/');
        return response.data;
    },
};

export default UserOpinion;
