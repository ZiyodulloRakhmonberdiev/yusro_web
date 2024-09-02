// import useFetch from '../../hooks/useFetch';
// import Info from '../../service/info';
// import SelectedPage from './../../components/SelectedPage';
// import Travel from './../../service/travel';



// function Haj() {
//     const { data: info } = useFetch(Info.getInfo)    
//     const { data, loading, error } = useFetch(Travel.getPlaces);
//     const relevantPlaces = data.results?.filter(place => place.id === info.haj);

//     return (
//         <div className='haj-page'>
//             <SelectedPage packages={relevantPlaces} error={error} loading={loading} />
//         </div>
//     );
// }

// export default Haj;


// import useFetch from '../../hooks/useFetch';
// import SelectedPage from './../../components/SelectedPage';
// import Travel from './../../service/travel';
// import axios from 'axios';
// import { useEffect, useState } from 'react';

// function Haj() {
//     const { data: info } = useFetch(Travel.getPlaces);
//     const [tours, setTours] = useState([]);
//     const main_url = "http://95.46.96.78:7777/api/v1";

//     useEffect(() => {
//         if (info?.haj) {
//             axios
//                 .get(`${main_url}/tours/by-category/${info.haj}/`)
//                 .then((response) => setTours(response.data.results || []))
//                 .catch(() => {
//                     throw new Error("Xatolik yuz berdi!");
//                 });
//         }
//     }, [info?.haj]);

//     return (
//         <div className='haj-page'>
//             <SelectedPage packages={info?.results || []} tours={tours} />
//         </div>
//     );
// }

// export default Haj;


import SelectedPage from './../../components/SelectedPage';
import useFetch from '../../hooks/useFetch';
import Travel from '../../service/travel';
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
            />
        </div>
    );
}

export default Haj;
