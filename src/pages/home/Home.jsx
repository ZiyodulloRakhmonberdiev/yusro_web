import { Link } from 'react-router-dom'
import './home.css'
import Category from './../../components/category/Category';
import images from './../../images/index';
import OurAmenities from './../../components/ourAmenities/OurAmenities';
import AgencyExperience from './../../components/agencyExperience/AgencyExperience';
import ContactUs from './../../components/contactUs/ContactUs';
import TourPackages from './../../components/tourPackages/TourPackages';
import Opinion from './../../components/opinion/Opinion';
import ContactAboutSection from './../../components/contactAboutSection/ContactAboutSection';
import Partners from './../../components/partners/Partners';
import News from './../../components/news/News';
import ExperienceAbout from './../../components/experienceAbot/ExperienceAbout';

function Home() {
	return (
		<div className='home'>
			<div className="agency-about">
				<div className="container">
					<span>Haj & umra turizm agentligi</span>
					<h1>yusro agentligining <br />rasmiy sahifasiga <br /> xush kelibsiz!</h1>
					<Link to='/packages'>Bizning paketlarimiz</Link>
				</div>
			</div>
			{/* category */}
			<Category />

			{/* experience */}
			<div className="agency-experience2 container">
				<div className="image">
					<div className="image-wrapper">
						<img src={images.imageWrapper} alt="" />
					</div>
					<img src={images.forImageWrapper} alt="" className='for-wrapper' />
				</div>
				<ExperienceAbout />
			</div>

			{/* amenities */}
			<OurAmenities />

			{/* agency ecperience */}
			<AgencyExperience />

			{/* contact */}
			<div className="contact-us">
				<div className="container">
					<ContactAboutSection />
					<ContactUs />
				</div>
			</div>

			{/* TourPackages */}
			<TourPackages />

			{/* opinon */}
				<Opinion />

			{/* partners */}
			<Partners />

			{/* news */}
			<News />
		</div>
	)
}

export default Home