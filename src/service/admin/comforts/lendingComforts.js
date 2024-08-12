import axios from '../api';

const lendingComforts = {
    async getLendingComforts() {
        try {
            const { data } = await axios.get('/landing-admin/company/comforts/');
            return data;
        } catch (error) {
            throw error;
        }
    },
    async postLendingComforts(item) {
        try {
            const { data } = await axios.post('/landing-admin/company/comforts/', item);
            return data;
        } catch (error) {
            throw error;
        }
    },
    async getLandingComfortsById(id) {
        try {
            const { data } = await axios.get(`/landing-admin/company/comforts/${id}/`);
            return data;
        } catch (error) {
            throw error;
        }
    },
    async deleteLandingComfortsById(id) {
        try {
            const { data } = await axios.delete(`/landing-admin/company/comforts/${id}/`);
            return data;
        } catch (error) {
            throw error;
        }
    },
    async putLandingComfortsById(id, item) {
        try {
            const { data } = await axios.put(`/landing-admin/company/comforts/${id}/`, item, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            return data;
        } catch (error) {
            throw error;
        }
    },
};

export default lendingComforts;
