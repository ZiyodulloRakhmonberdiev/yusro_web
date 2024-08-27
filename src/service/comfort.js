// api
import axios from './apis';

const ComfortItem = {
    async getAgencyComfort() {
        const agencyComfort = await axios.get('/main/convenience/');
        return agencyComfort.data;
    },
};

export default ComfortItem;
