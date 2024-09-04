// api
import axios from './apis';

const Partner = {
    async getPartner() {
        const partner = await axios.get('/main/partners/');
        return partner.data;
    },
};

export default Partner;
