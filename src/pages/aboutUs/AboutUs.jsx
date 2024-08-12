import './aboutUs.css'
import ExtraPagesHeader from './../../components/extraPagesHeader/ExtraPagesHeader';
import ExperienceAbout from './../../components/experienceAbot/ExperienceAbout';
import images from './../../images/index';
import AgencyResults from './../../components/agencyResults/AgencyResults';
import Teams from './../../components/teams/Teams';
import Opinion from './../../components/opinion/Opinion';
import Partners from './../../components/partners/Partners';

function AboutUs() {
	return (
		<div className='about-us'>
			{/* ExtraPagesHeader */}
			<ExtraPagesHeader title="Biz haqimizda" />

			{/* ExperienceAbout */}
			<div className="about-us-experience agency-experience2 container">
				<div className="images">
					<img src={images.img21} alt="" />
					<img src={images.img22} alt="" />
				</div>
				<div className="about">
					<ExperienceAbout />
				</div>
			</div>

			{/* AgencyResults */}
			<AgencyResults/>

			{/* teams */}
			<Teams/>

			{/* opinion */}
			<Opinion/>

			{/* partners */}
			<Partners/>
		</div>
	)
}

export default AboutUs