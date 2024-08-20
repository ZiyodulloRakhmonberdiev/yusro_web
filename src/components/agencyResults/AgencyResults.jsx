import './agencyResults.css'

import mosque_2 from '../../images/mosque_2.jpg';
import message_fill from "../../icons/message_fill.png";
import location_fill from "../../icons/location_fill.png";
import muslim from "../../icons/muslim_icon.png";


function AgencyResults() {
	return (
		<div className='agency-results'>
			<div className="container">
				<div className="about">
					<div className="title">Agentligimiz 1000 dan ortiq haj va umra sayohatchilariga yordam bergan</div>
					<div className="image">
						<img src={mosque_2} alt="" />
						<div className="play-icon-div">
            <button className="play-icon-wrapper">
              <div className="triangle"></div>
            </button>
            </div>
					</div>
				</div>
				<div className="cards">
					<div className="card">
						<div className="image">
							<img src={message_fill} alt="" />
						</div>
						<div className="about">
							<div className="title">Haj va Umra tur operatori</div>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ratione exercitationem necessitatibus eos consequuntur, animi iure ut amet sed. Nesciunt.</p>
						</div>
					</div>
					<div className="card">
						<div className="image">
							<img src={location_fill} alt="" />
						</div>
						<div className="about">
							<div className="title">Aviakompaniyalarni bron qilish va chiptalarni sotish</div>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ratione exercitationem necessitatibus eos consequuntur, animi iure ut amet sed. Nesciunt.</p>
						</div>
					</div>
					<div className="card">
						<div className="image">
							<img src={muslim} alt="" />
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