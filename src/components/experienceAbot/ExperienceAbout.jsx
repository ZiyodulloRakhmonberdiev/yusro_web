import './experienceAbout.css'
import images from './../../images/index';

function ExperienceAbout() {
	return (
		<div className='container'>
			<div className="about">
				<img src={images.bismillah} alt="" />
				<h1 className="title">Biz 7 yillik tajribaga ega sayyohlik agentligimiz</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ex. Illo officiis architecto doloremque obcaecati eaque fugit iste libero sed.
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, eum?
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, laborum?
				</p>
				<div className="items">
					<div className="item">
						<div className="item-image-wrapper">
							<img src={images.kabah} alt="" />
						</div>
						<span>Haramga yaqin</span>
					</div>
					<div className="item">
						<div className="item-image-wrapper">
							<img src={images.mehmonxona} alt="" />
						</div>
						<span>Shinam mehmonxonalar</span>
					</div>
					<div className="item">
						<div className="item-image-wrapper">
							<img src={images.hour} alt="" />
						</div>
						<span>24 / 7 Hojiboshilar xizmati</span>
					</div>
					<div className="item">
						<div className="item-image-wrapper">
							<img src={images.passport} alt="" />
						</div>
						<span>Tezkor viza xizmati</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ExperienceAbout