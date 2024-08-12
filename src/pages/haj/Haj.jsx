import useFetch from '../../hooks/useFetch';
import SelectedPage from './../../components/SelectedPage';
import Travel from './../../service/travel';

function Haj() {
    const { data, loading, error } = useFetch(Travel.getPlaces);
    const relevantPlaces = data.filter(place => place.important === 1);

    return (
        <div className='haj-page'>
            <SelectedPage packages={relevantPlaces} error={error} loading={loading} />
        </div>
    );
}

export default Haj;
