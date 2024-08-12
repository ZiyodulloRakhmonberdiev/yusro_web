import './contactAboutSection.css'
import images from './../../images/index';

function ContactAboutSection() {
	return (
		<div className='contact-us-about'>
			<div className="container">
				<div className="about">
					<h1 className='main-title'>Arzon paketlarni qidiryapsizmi? Siz to'g'ri joydasiz</h1>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda perferendis ut impedit explicabo provident quae officiis recusandae, nulla temporibus obcaecati?</p>
					<div className="we-results">
						<div className="we-result">
							<img src={images.sign} alt="" />
							<div className="we-result-about">
								<p>100k+</p>
								<span>Muvaffaqiyatli viza</span>
							</div>
						</div>
						<div className="we-result">
							<img src={images.kabahlocation2} alt="" />
							<div className="we-result-about">
								<p>850k+</p>
								<span>Umra sayohatchilari</span>
							</div>
						</div>
					</div>
					<div className="answers-to-questions">
						<img src={images.phone2} alt="" />
						<div className="wrapper">
							<p>Savollaringiz bormi? Biz bilan bog'laning</p>
							<span>+998 (88) 511 11 66</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ContactAboutSection