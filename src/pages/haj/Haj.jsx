import useFetch from '../../hooks/useFetch';
import Info from '../../service/info';
import SelectedPage from './../../components/SelectedPage';
import Travel from './../../service/travel';



function Haj() {
    const { data: info } = useFetch(Info.getInfo)    
    const { data, loading, error } = useFetch(Travel.getPlaces);
    const relevantPlaces = data.results?.filter(place => place.id === info.haj);

    return (
        <div className='haj-page'>
            <SelectedPage packages={relevantPlaces} error={error} loading={loading} />
        </div>
    );
}

export default Haj;
