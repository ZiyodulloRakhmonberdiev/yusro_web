import axios from './api';

const Travel = {
    async getPlaces() {
        const places = await axios.get('/travel/places/');
        return places.data;
    },
    async getTourPacks() {
        const opinions = await axios.get('/travel/tour-packs/');
        return opinions.data;
    },
    async getTourPacksById(id) {
        const tourPack = await axios.get(`/travel/tour-packs/${id}/`);
        return tourPack.data;
    },
    async getTourPacksPlaceById(id) {
        const tourPack = await axios.get(`/travel/tour-packs/?place_id=${id}`);
        return tourPack.data;
    },
};

export default Travel;
