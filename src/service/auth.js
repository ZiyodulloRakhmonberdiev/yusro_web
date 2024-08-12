import axios from './api';

const AuthService = {
    async userRegister(user) {
        try {
            const { data } = await axios.post('/contact-us/lid-create/', user);
            return data;
        } catch (error) {
            throw error;
        }
    },
    async newsletterCreate(user) {
        try {
            const { data } = await axios.post('/contact-us/newsletter-create/', user);
            return data;
        } catch (error) {
            throw error;
        }
    },
    async discussionCreate(user) {
        try {
            const { data } = await axios.post('/contact-us/discussion-create/', user);
            return data;
        } catch (error) {
            throw error;
        }
    },
};

export default AuthService;
