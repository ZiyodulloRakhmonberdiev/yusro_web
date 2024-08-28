// api
import axios from './apis';

const Info = {
    async getInfo() {
        const response = await axios.get('/main/info/');
        return response.data.results[0];
    },
};

export default Info;
