// api
import axios from './api';

const ComfortItem = {
    async getAgencyComfort() {
        const agencyComfort = await axios.get('/company/comforts/');
        return agencyComfort.data;
    },
};

export default ComfortItem;
