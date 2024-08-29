import React, { useState } from 'react';
import './contactUs.css';
import { useDispatch, useSelector } from 'react-redux';
import { signInUserFailure, signInUserStart, signInUserSuccess } from '../../features/auth/authSlice';
import axios from 'axios';

function ContactUs() {
	const [name, setName] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [message, setMessage] = useState('');
	const [formErrors, setFormErrors] = useState({});
	const [placeholder, setPlaceholder] = useState({});
	const [successMessage, setSuccessMessage] = useState('');

	const dispatch = useDispatch();
	const { isLoading, error } = useSelector(state => state.auth);

	const handleSubmit = async (e) => {
		e.preventDefault();
		// Simple validation example
		let errors = {};
		if (!name) errors.name = 'Ism kiritilishi shart';
		if (!phoneNumber) errors.phoneNumber = 'Telefon raqam kiritilishi shart';

		if (Object.keys(errors).length > 0) {
			setFormErrors(errors);
			return;
		}

		dispatch(signInUserStart());
		const formData = { full_name: name, telephone: phoneNumber, text: message };

		try {
			const response = await axios.post('http://95.46.96.78:7777/api/v1/main/application-create/', formData);
			if (response.status === 201) {
				// dispatch(signInUserSuccess(response.data));
				setName('');
				setPhoneNumber('');
				setMessage('');
				setFormErrors({});
				setSuccessMessage('Muvaffaqiyatli yuborildi!');
				setTimeout(() => {
					setSuccessMessage('');
				}, 3000);
			} else {
				throw new Error('Yuborish muvaffaqiyatsiz bo\'ldi.');
			}
		} catch (error) {
			const errorMessage = error?.response?.data?.errors || 'Bir xatolik yuz berdi.';
			setFormErrors({ global: errorMessage });
			dispatch(signInUserFailure({ error: errorMessage }));
		}
	};

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
								value={name}
								onChange={(e) => setName(e.target.value)}
								className={formErrors.name ? 'error' : ''}
							/>
							{formErrors.name && <p className="error">{formErrors.name}</p>}
							
							<input
								type='text'
								placeholder={placeholder.phoneNumber || 'Telefon raqamingizni kiriting'}
								value={phoneNumber}
								onChange={(e) => setPhoneNumber(e.target.value)}
								className={formErrors.phoneNumber ? 'error' : ''}
							/>
							{formErrors.phoneNumber && <p className="error">{formErrors.phoneNumber}</p>}

							<textarea
								placeholder='Xabar'
								value={message}
								onChange={(e) => setMessage(e.target.value)}
							/>
							
							<button type='submit' disabled={isLoading}>{isLoading ? 'YUBORILMOQDA...' : 'YUBORISH'}</button>
							
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
