import SelectedPage from './../../components/SelectedPage';
import useFetch from '../../hooks/useFetch';
import Info from '../../service/info';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Haj() {
    const { data: info } = useFetch(Info.getInfo);  // Fetch Haj-specific info
    const [tours, setTours] = useState([]);
    const main_url = "http://95.46.96.78:7777/api/v1";

    useEffect(() => {
        if (info?.haj) {
            axios
                .get(`${main_url}/tours/by-category/${info.haj}/`)
                .then((response) => setTours(response.data.results || []))
                .catch(() => {
                    throw new Error("Xatolik yuz berdi!");
                });
        }
    }, [info?.haj]);

    return (
        <div className='haj-page'>
            <SelectedPage 
                packages={info?.results?.filter(place => place.id === info.haj) || []} 
                tours={tours} 
                info={info}
                pageType="haj"
            />
        </div>
    );
}

export default Haj;
