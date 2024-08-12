import './agencyExperience.css'
import images from './../../images/index';

function AgencyExperience() {
	return (
		<div className='agency-experience container'>
			<div className="images">
				<div className="nabwi1-wrapper">
					<img src={images.nabwi1} alt="" className='nabwi1' />
				</div>
				<div className='grid-image-wrapper'>
					<div className="sign1-wrapper">
						<img src={images.sign1} alt="" className='sign1' />
						<h1>Haj va Umrani mukammal bajarishni bilib oling</h1>
					</div>
					<div className="nabwi2-wrapper">
						<img src={images.nabwi2} alt="" className='nabwi2' />
						<span className="play-icon-wrapper">
							<i className="fa-solid fa-play"></i>
						</span>
					</div>
				</div>
			</div>
			<div className="about">
				<div className="main-title">
					<h1>Agentligimiz 100.000 dan ortiq Haj va Umra ziyoratchilariga xizmat ko'rsatgan</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam tenetur vero libero quisquam tempora autem itaque earum officia debitis suscipit.
					</p>

					<div className="experience-section">
						<div className="experience">
							<img src={images.imageWrapper2} alt="" />
							<div className="about">
								<h1>7</h1>
								<span>Yillik tajriba</span>
							</div>
						</div>
						<div className="experience-about">
							<li>
								<i className="fa-solid fa-check"></i>
								<span>Haramdan 100 metr masofada hashamatli mehmonxona</span>
							</li>
							<li>
								<i className="fa-solid fa-check"></i>
								<span>Saudiya hukumatining mukofotlari</span>
							</li>
							<li>
								<i className="fa-solid fa-check"></i>
								<span>7+ yil, ko'plab yutuqlar mukofotlari</span>
							</li>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AgencyExperience