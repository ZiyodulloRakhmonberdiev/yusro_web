import axios from './apis';

const Travel = {
    async getPlaces() {
        const places = await axios.get('/tours/tour-categories/');
        return places.data;
    },
    async getTourPacks() {
        const opinions = await axios.get('/tours/list/');
        return opinions.data;
    },
    async getTourPacksById(id) {
        const tourPack = await axios.get(`/tours/${id}/`);
        return tourPack.data;
    },
    async getTourPacksPlaceById(id) {
        const tourPack = await axios.get(`/tours/by-category/${id}/`);
        return tourPack.data;
    },
};

export default Travel;
