import React, { useState } from 'react';
import './contactUs.css';
import { useDispatch, useSelector } from 'react-redux';
import { signInUserFailure, signInUserStart, signInUserSuccess } from '../../features/auth/authSlice';
// import UiInput from './../../ui/UiInput';
import AuthService from './../../service/auth';
// import UiTextarea from './../../ui/UiTextarea';
import ValidateForm from './../../helpers/ValidateForm';
import axios from 'axios';
import { Email } from '@mui/icons-material';

function ContactUs() {
	const [name, setName] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [message, setMessage] = useState('');
	const [formErrors, setFormErrors] = useState({});
	const [placeholder, setPlaceholder] = useState({});
	const [successMessage, setSuccessMessage] = useState('');

	const dispatch = useDispatch();
	const { isLoading, error } = useSelector(state => state.auth);


	// const handleSubmit = async (e) => {
	// 	e.preventDefault();
	// 	const { errors, placeholders } = ValidateForm({name, phoneNumber});
		// if (Object.keys(errors).length > 0) {
		// 	setFormErrors(errors);
		// 	setPlaceholder(placeholders);
		// 	setTimeout(() => setPlaceholder({}), 3000);
		// 	return;
		// }

	// 	dispatch(signInUserStart());
	// 	const user = { full_name: name, phone_number: phoneNumber, message };
	// 	try {
	// 		const response = await AuthService.userRegister(user);
	// 		if (response && response.user) {
	// 			dispatch(signInUserSuccess(response.user));
	// 			setName('');
	// 			setPhoneNumber('');
	// 			setMessage('');
	// 			setFormErrors({});
	// 			setPlaceholder({});
	// 			setSuccessMessage(`Muvaffaqiyatli ro'yxatdan o'tdingiz!`);
	// 			setTimeout(() => {
	// 				setSuccessMessage('');
	// 			}, 3000);
	// 		} else {
	// 			throw new Error(`Xizmatdan foydalangan foydalanuvchi ma'lumotlari mavjud emas.`);
	// 		}
	// 	} catch (error) {
	// 		const errorMessage = error?.response?.data?.errors || 'Xatolik yuz berdi!';
	// 		setTimeout(() => {
	// 			errorMessage = error?.response?.data?.errors
	// 		}, 3000);
	// 		setFormErrors({ global: errorMessage });
	// 		dispatch(signInUserFailure({ error: errorMessage }));
	// 	}
	// };

	const main_url = "http://95.46.96.78:7777/api/v1";
	// const handleSubmit = async (e) => {
	// 	e.preventDefault()
	// 	const { errors, placeholders } = ValidateForm({name, phoneNumber});
	// 	if (Object.keys(errors).length > 0) {
	// 		setFormErrors(errors);
	// 		setPlaceholder(placeholders);
	// 		setTimeout(() => setPlaceholder({}), 3000);
	// 		return;
	// 	}
		
// 		await axios.post('http://95.46.96.78:7777/api/v1/main/application-create/', {
// 			full_name: name,
// 			telephone: phoneNumber,
// 			text: message,
// 		}).then(() => {
// 			setSuccessMessage(`Muvaffaqiyatli ro'yxatdan o'tdingiz!`);
// 			setTimeout(() => {
// 				setSuccessMessage('');
// 			}, 3000);
// 			setName('');
// 			setPhoneNumber('');
// 			setMessage('');
// 			setFormErrors({});
// 			setPlaceholder({});
// 		}).catch((error) => {
// 			const errorMessage = error?.response?.data?.errors || 'Xatolik yuz berdi!';
// 			setTimeout(() => {
// 				errorMessage = error?.response?.data?.errors
// 			}, 3000);
// 			setFormErrors({ global: errorMessage });
// 		})
// 	}
// console.log(successMessage);

const [formData, setFormData] = useState({
	name: '',
	phone: '',
	message: ''
});

const handleChange = (e) => {
	const { name, value } = e.target;
	setFormData((prevData) => ({
		...prevData,
		[name]: value,
	}));
};

const handleSubmit = async (e) => {
	e.preventDefault();
	try {
		const response = await axios.post('http://95.46.96.78:7777/api/v1/main/application-create/', formData, {
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (response.status === 200) {
			alert('Ma\'lumotlar muvaffaqiyatli yuborildi!');
			// Formni tozalash
			setFormData({
				name: '',
				phone: '',
				message: ''
			});
		} else {
			console.error('Error submitting data:', response.statusText);
		}
	} catch (error) {
		console.error('Error:', error);
	}
};

console.log(name);



	return (
		<div className='contact-us-section'>
			<div className='form-wrapper'>
				{successMessage ? (
					<div className='success-message'>
						<h2>{successMessage}</h2>
					</div>
				) : (
					<>
						<h2 className='title'>Hoziroq ro'yxatdan o'ting</h2>
						<p>va chegirmaga ega bo'ling</p>
						<form onSubmit={handleSubmit}>
							<input
								type='text'
								placeholder={placeholder.name || 'Ismingizni kiriting'}
								// state={name}
								// setState={setName}
								// hasError={!!formErrors.name}
								onChange={handleChange}
								// value={formData.name}
							/>
							<input
								type='text'
								placeholder={placeholder.phoneNumber || 'Telefon raqamingizni kiriting'}
								// state={phoneNumber}
								// setState={setPhoneNumber}
								// hasError={!!formErrors.phoneNumber}
								onChange={handleChange}
								// value={formData.phone}
							/>
							<textarea
								placeholder='Xabar'
								// state={message}
								// setState={setMessage}
								onChange={handleChange}
								// value={formData.message}
							/>
							{/* <UiInput
								type='text'
								placeholder={placeholder.name || 'Ismingizni kiriting'}
								state={name}
								setState={setName}
								hasError={!!formErrors.name}
								handleChange={handleChange}
								value={formData.name}
							/>
							<UiInput
								type='text'
								placeholder={placeholder.phoneNumber || 'Telefon raqamingizni kiriting'}
								state={phoneNumber}
								setState={setPhoneNumber}
								hasError={!!formErrors.phoneNumber}
								handleChange={handleChange}
								value={formData.phone}
							/>
							<UiTextarea
								placeholder='Xabar'
								state={message}
								setState={setMessage}
								handleChange={handleChange}
								value={formData.message}
							/> */}
							<button type='submit' disabled={isLoading}>{isLoading ? 'Yuborilmoqda...' : 'Yuborish'}</button>
							{formErrors.global && <p className="error">{formErrors.global}</p>}
							{error && <p className="error">{error.message}</p>}
						</form>
					</>
				)}
			</div>
		</div>
	);
}

export default ContactUs;
