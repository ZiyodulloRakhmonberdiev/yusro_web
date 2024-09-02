// import SelectedPage from './../../components/SelectedPage';
// import useFetch from '../../hooks/useFetch';
// import Travel from '../../service/travel';
// import Info from '../../service/info';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// function Umra() {
//     const { data: info } = useFetch(Info.getInfo);
//     const { data, loading, error } = useFetch(Travel.getPlaces);
//     const relevantPlaces = data.results?.filter(place => place.id === info.umra);

//     const [tours, setTours] = useState([]);
//     const main_url = "http://95.46.96.78:7777/api/v1";
//     useEffect(() => {
//         axios
//           .get(`${main_url}/tours/by-category/${info.umra}/`)
//           .then((response) => setTours(response.data))
//           .catch(() => {
//             throw new Error("Xatolik yuz berdi!");
//           });
//       }, [info.umra]);

//     return (
//         <div className='umra-page'>
//             <SelectedPage packages={relevantPlaces} error={error} loading={loading} tours={tours} />
//         </div>
//     );
// }

// export default Umra;


// import SelectedPage from './../../components/SelectedPage';
// import useFetch from '../../hooks/useFetch';
// import Travel from '../../service/travel';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// function Umra() {
//     const { data: info } = useFetch(Travel.getPlaces);
//     const [tours, setTours] = useState([]);
//     const main_url = "http://95.46.96.78:7777/api/v1";

//     useEffect(() => {
//         if (info?.umra) {
//             axios
//                 .get(`${main_url}/tours/by-category/${info.umra}/`)
//                 .then((response) => setTours(response.data.results || []))
//                 .catch(() => {
//                     throw new Error("Xatolik yuz berdi!");
//                 });
//         }
//     }, [info?.umra]);

//     return (
//         <div className='umra-page'>
//             <SelectedPage packages={info?.results || []} tours={tours} />
//         </div>
//     );
// }

// export default Umra;



import SelectedPage from './../../components/SelectedPage';
import useFetch from '../../hooks/useFetch';
import Travel from '../../service/travel';
import Info from '../../service/info';
import { useEffect, useState } from 'react';
import axios from 'axios';

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
            />
        </div>
    );
}

export default Umra;
