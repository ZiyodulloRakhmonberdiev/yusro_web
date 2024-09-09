import { useEffect, useState } from 'react';
import axios from 'axios';

import SelectedPage from './../../components/SelectedPage';
import useFetch from '../../hooks/useFetch';
import Info from '../../service/info';

function Umra() {
    const { data: info } = useFetch(Info.getInfo);  // Fetch Umra-specific info
    const [tours, setTours] = useState([]);
    const main_url = "http://95.46.96.78:7777/api/v1";

    useEffect(() => {
        if (info?.umra) {
            axios
                .get(`${main_url}/tours/by-category/${info.umra}/`)
                .then((response) => setTours(response.data.results || []))
                .catch(() => {
                    throw new Error("Xatolik yuz berdi!");
                });
        }
    }, [info?.umra]);

    return (
        <div className='umra-page'>
            <SelectedPage 
                packages={info?.results?.filter(place => place.id === info.umra) || []} 
                tours={tours} 
                info={info}
                pageType="umra"
            />
        </div>
    );
}

export default Umra;
