import axios from '../api';

const lendingMembers = {
    async getLendingMembers() {
        try {
            const { data } = await axios.get('/landing-admin/company/members/');
            return data;
        } catch (error) {
            throw error;
        }
    },
    async postLendingMembers(item) {
        try {
            const { data } = await axios.post('/landing-admin/company/members/', item);
            return data;
        } catch (error) {
            throw error;
        }
    },
    async getLandingMembersById(id) {
        try {
            const { data } = await axios.get(`/landing-admin/company/members/${id}/`);
            return data;
        } catch (error) {
            throw error;
        }
    },
    async deleteLandingMembersById(id) {
        try {
            const { data } = await axios.delete(`/landing-admin/company/members/${id}/`);
            return data;
        } catch (error) {
            throw error;
        }
    },
    async putLandingMembersById(id, item) {
        try {
            const { data } = await axios.put(`/landing-admin/company/members/${id}/`, item, {
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

export default lendingMembers;
