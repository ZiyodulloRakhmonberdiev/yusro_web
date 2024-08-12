import { useEffect, useState } from 'react';
import './partners.css'
import Loader from './../../ui/Loader';
import Title from './../../ui/Title';
import images from './../../images/index';

function Partners() {

	// const [partnersData, setPartnersData] = useState([]);
	// const [loading, setLoading] = useState(true);
	// const [error, setError] = useState(null);

	// useEffect(() => {
	// 	async function fetchPartners() {
	// 		try {
	// 			const data = await TotalCommand.getPartners();
	// 			setPartnersData(data);
	// 			setLoading(false);
	// 		} catch (error) {
	// 			setError(error);
	// 			setLoading(false);
	// 		}
	// 	}

	// 	fetchPartners();
	// }, []);


	return (
		<div className='partners'>
			{/* {loading ? (
				<Loader />
			) : error ? (
				<div className="error">{error}</div>
			) : <div className='container'>
				<Title img={images.kabah} title="Bizning aloqalarimiz" description="Bizning ko'rsatmalarimiz din ishlari bo'yicha ko'rsatmalarga muvofiq ishlab chiqilgan"/>
				{partnersData.map(partner => {
					return (
						<div className='partner-contents'>
							<div key={partner.id} className="partner-content">
								<img src={partner.company_logo} alt="" />
								<div className="name">{partner.company_name}</div>
							</div><div key={partner.id} className="partner-content">
								<img src={partner.company_logo} alt="" />
								<div className="name">{partner.company_name}</div>
							</div><div key={partner.id} className="partner-content">
								<img src={partner.company_logo} alt="" />
								<div className="name">{partner.company_name}</div>
							</div><div key={partner.id} className="partner-content">
								<img src={partner.company_logo} alt="" />
								<div className="name">{partner.company_name}</div>
							</div>
						</div>
					)
				})}
			</div>} */}
		</div>
	)
}

export default Partners