import "./rootLayout.css";
import { Link, Outlet } from "react-router-dom";
import images from "./../images/index";
import { useState } from "react";
import UiInput from './../ui/UiInput';
import { useDispatch, useSelector } from "react-redux";
import AuthService from './../service/auth';
import { signInUserFailure, signInUserStart, signInUserSuccess } from "../features/auth/authSlice";
import Sidebar from './../components/sidebar/Sidebar';
import ValidateForm from "../helpers/ValidateForm";

function RootLayout() {

	const [active, setActive] = useState(false)
	const [phoneNumber, setPhoneNumber] = useState('');
	const [formErrors, setFormErrors] = useState({});
	const [placeholder, setPlaceholder] = useState({});
	const [successMessage, setSuccessMessage] = useState('');

	const dispatch = useDispatch();
	const { isLoading, error } = useSelector(state => state.auth);


	const handleSubmit = async (e) => {
		e.preventDefault();
		const { errors, placeholders } = ValidateForm({phoneNumber});
		if (Object.keys(errors).length > 0) {
			setFormErrors(errors);
			setPlaceholder(placeholders);
			setTimeout(() => setPlaceholder({}), 3000);
			return;
		}

		dispatch(signInUserStart());
		const user = { phone_number: phoneNumber };
		try {
			const response = await AuthService.newsletterCreate(user);
			dispatch(signInUserSuccess({ user: response.user, type: 'newsletter' }));
			setPhoneNumber('');
			setFormErrors({});
			setPlaceholder({});
			setSuccessMessage('Muvaffaqiyatli!');
			setTimeout(() => {
				setSuccessMessage('');
			}, 3000);
		} catch (error) {
			dispatch(signInUserFailure({ error: error.response.data.errors, type: 'newsletter' }));
		}
	};


	return (
		<div className="root">
			<Sidebar active={active} setActive={setActive} />
			<header>
				<section className="main-head container">
					<div className="social-media">
						<p>Ijtimoiy tarmoqlarimiz</p>
						<span></span>
						<img src={images.instagramLogo} alt="" />
						<span></span>
						<img src={images.telegramLogo} alt="" />
						<span></span>
						<img src={images.facebookLogo} alt="" />
						<span></span>
						<img src={images.youtubeLogo} alt="" />
						<span></span>
					</div>
					<div className="navbar">
						<Link to="/about-us">Biz haqimizda</Link>
						<Link to="">Hamkorlik</Link>
						<Link to="">Fikrlar</Link>
						<Link to="/umra">Umra</Link>
						<Link to="/haj">Haj</Link>
						<Link to="/contact">Aloqa</Link>
					</div>
				</section>
				<section className="container header-details">
					<Link className="logo main-logo">
						<img src={images.logo} alt="" />
						<span></span>
					</Link>
					<div className="details">
						<div className="contacts">
							<Link className="logo">
								<img src={images.logo} alt="" />
							</Link>
							<div className="by-phonenumber">
								<img src={images.phoneLogo} alt="" />
								<div className="about">
									<span>Hoziroq bizga qo'ng'iroq qiling</span>
									<p>+998 (88) 511 11 66</p>
								</div>
							</div>
							<div className="by-emailadress">
								<img src={images.messageLogo} alt="" />
								<div className="about">
									<span>Email manzilimiz</span>
									<p>admin@yusro.uz</p>
								</div>
							</div>
							<div className="search-wrapper">
								<div className="search">
									<input type="text" placeholder="Qidirish" name="search" />
									<i className="fa-solid fa-magnifying-glass"></i>
								</div>
								<div className="hamburger-menu" onClick={() => setActive(true)}>
									<span></span>
									<span></span>
									<span></span>
								</div>
							</div>
						</div>
						<div className="navbar">
							<Link to='/' className="active">Bosh safiha</Link>
							<Link to='/packages'>Paketlar</Link>
							<Link to='/blog'>Blog</Link>
							<Link to='/video-content'>Video kontent</Link>
						</div>
					</div>
				</section>
			</header>

			<main>
				<Outlet />
			</main>
			<footer>
				<div className="container">
					<div className="footer-top-section container">
						<div className="about">
							<i className="fa-solid fa-phone-volume"></i>
							<div className="info">
								<p>Yangi maqolalarga obuna bo'ling</p>
								<span>Eng so'ngi yangiliklar faqat bizda!</span>
							</div>
						</div>
						<form className="send-phoneNumber">
							{isLoading ? <div className='success-message'>
								<h2>Yuborilmoqda...</h2>
							</div> : successMessage ? (
								<div className='success-message'>
									<h2>{successMessage}</h2>
								</div>
							) : (
								<>
									<UiInput
										type='text'
										state={phoneNumber}
										setState={setPhoneNumber}
										placeholder={placeholder.phoneNumber || 'Telefon raqamingizni kiriting'}
										hasError={!!formErrors.phoneNumber}
									/>
									<button onClick={handleSubmit} type="submit">
										<i className="fa-regular fa-paper-plane"></i>
									</button>
								</>
							)}
						</form>
					</div>
				</div>
				<div className="main-footer">
					<div className="container">
						<div className="main-footer-details">
							<div className="logo">
								<img src={images.logo2} alt="" />
								<div className="info">
									<p>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius,
										porro facere tempore quidem impedit exercitationem eum sit in
										unde ipsa!
										Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit blanditiis veniam adipisci! Unde consequuntur nam natus labore quidem in corrupti.
									</p>
									<div className="social-networks">
										<i className="fab fa-instagram"></i>
										<i className="fab fa-telegram"></i>
										<i className="fab fa-facebook"></i>
										<i className="fab fa-youtube"></i>
										<span></span>
									</div>
								</div>
							</div>
							<div className="clip">
								<div className="title">Lahalar</div>
								<div className="images">
									<img src={images.nabwi2} alt="" />
									<img src={images.nabwi2} alt="" />
									<img src={images.nabwi2} alt="" />
									<img src={images.nabwi2} alt="" />
									<img src={images.nabwi2} alt="" />
									<img src={images.nabwi2} alt="" />
								</div>
							</div>
							<div className="we-offer">
								<div className="title">Biz taklif qilamiz</div>
								<div className="lists">
									<div className="list">
										<i className="fa-solid fa-chevron-left"></i>
										<span>Umra ziyorati</span>
									</div>
									<div className="list">
										<i className="fa-solid fa-chevron-left"></i>
										<span>Ichki turizm</span>
									</div>
									<div className="list">
										<i className="fa-solid fa-chevron-left"></i>
										<span>Tashqi turizm</span>
									</div>
								</div>
							</div>
							<div className="footer-contact-us">
								<div className="title">Biz bilan bog'laning</div>
								<div className="details">
									<div className="detail">
										<img src={images.phone} alt="" />
										<span>+998 (88) 511 11 66</span>
									</div>
									<div className="detail">
										<img src={images.telegram3} alt="" />
										<span>yusro_admin</span>
									</div>
									<div className="detail">
										<img src={images.message} alt="" />
										<span>admin@yusro.uz</span>
									</div>
									<div className="detail">
										<img src={images.location2} alt="" />
										<span>Toshkent shahar, Ko'kcha masjidi ro'parasi</span>
									</div>
								</div>
							</div>
						</div>
						<div className="footer-bottom">
							<div className="copyright">
								<i className="fa-regular fa-copyright"></i>
								<p>Copyrights 2024 Yusro,</p>
								<span>Barcha huquqlar himoyalangan</span>
							</div>
							<div className="payment">
								<span>Quyidagi to'lov usullari mavjud:</span>
								<div className="methods">
									<img src={images.humo} alt="" />
									<img src={images.uzcard} alt="" />
									<img src={images.visa} alt="" />
									<img src={images.mastercard} alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default RootLayout;
