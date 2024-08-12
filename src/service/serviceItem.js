// api
import axios from './api';

const ServiceItem = {
    async getAgencyServices() {
        const agencyServices = await axios.get('/company/services/');
        return agencyServices.data;
    },
};

export default ServiceItem;
