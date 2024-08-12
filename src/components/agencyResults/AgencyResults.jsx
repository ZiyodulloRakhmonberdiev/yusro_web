import './agencyResults.css'
import images from './../../images/index';

function AgencyResults() {
	return (
		<div className='agency-results'>
			<div className="container">
				<div className="about">
					<div className="title">Agentligimiz 1000 dan ortiq haj va umra sayohatchilariga yordam bergan</div>
					<div className="image">
						<img src={images.img23} alt="" />
						<span className="play-icon-wrapper">
							<i className="fa-solid fa-play"></i>
						</span>
					</div>
				</div>
				<div className="cards">
					<div className="card">
						<div className="image">
							<img src={images.colourlyMessage} alt="" />
						</div>
						<div className="about">
							<div className="title">Haj va Umra tur operatori</div>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ratione exercitationem necessitatibus eos consequuntur, animi iure ut amet sed. Nesciunt.</p>
						</div>
					</div>
					<div className="card">
						<div className="image">
							<img src={images.colourlyLocation} alt="" />
						</div>
						<div className="about">
							<div className="title">Aviakompaniyalarni bron qilish va chiptalarni sotish</div>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ratione exercitationem necessitatibus eos consequuntur, animi iure ut amet sed. Nesciunt.</p>
						</div>
					</div>
					<div className="card">
						<div className="image">
							<img src={images.muslim} alt="" />
						</div>
						<div className="about">
							<div className="title">Haj va Umra uchun sifatli xizmat ko'rsatish</div>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ratione exercitationem necessitatibus eos consequuntur, animi iure ut amet sed. Nesciunt.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AgencyResults