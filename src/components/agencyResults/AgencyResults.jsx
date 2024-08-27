import './agencyResults.css'

import mosque_2 from '../../images/mosque_2.jpg';
import message_fill from "../../icons/message_fill.png";
import location_fill from "../../icons/location_fill.png";
import muslim from "../../icons/muslim_icon.png";
import { useEffect, useState } from 'react';
import axios from 'axios';


function AgencyResults() {
	const [info, setInfo] = useState([]);
  const main_url = "http://95.46.96.78:7777/api/v1";

  useEffect(() => {
    axios
      .get(`${main_url}/main/team/`)
      .then((response) => setInfo(response.data))
      .catch(() => {
        throw new Error("Xatolik yuz berdi!");
      });
  }, []);
	
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
							<p>Tashkilot joylarni qidirish va buyurtma berish, shartnomalar tuzish va muzokaralar olib borishda ko'maklashadi. </p>
						</div>
					</div>
					<div className="card">
						<div className="image">
							<img src={location_fill} alt="" />
						</div>
						<div className="about">
							<div className="title">Aviakompaniyalarni bron qilish va chiptalarni sotish</div>
							<p>Aviakompaniyalar bilan shartnoma tuzadi, joylarni bron qiladi va chiptalar sotadi</p>
						</div>
					</div>
					<div className="card">
						<div className="image">
							<img src={muslim} alt="" />
						</div>
						<div className="about">
							<div className="title">Haj va Umra uchun sifatli xizmat ko'rsatish</div>
							<p>Mijozlarga ularning muammolarini yechishda doim yaqindan yordam beradi</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AgencyResults