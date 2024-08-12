import SelectedPage from './../../components/SelectedPage';
import useFetch from '../../hooks/useFetch';
import Travel from '../../service/travel';

function Umra() {
    const { data, loading, error } = useFetch(Travel.getPlaces);
    const relevantPlaces = data.filter(place => place.important === 2);

    return (
        <div className='umra-page'>
            <SelectedPage packages={relevantPlaces} error={error} loading={loading} />
        </div>
    );
}

export default Umra;
