import axios from './apis';

const Travel = {
    async getPlaces() {
        const places = await axios.get('/tours/tour-category/');
        return places.data;
    },
    async getTourPacks() {
        const opinions = await axios.get('/tours/tour/');
        return opinions.data;
    },
    async getTourPacksById(id) {
        const tourPack = await axios.get(`/tours/tour/${id}/`);
        return tourPack.data;
    },
    async getTourPacksPlaceById(id) {
        const tourPack = await axios.get(`/tours/tour/?place_id=${id}`);
        return tourPack.data;
    },
};

export default Travel;
