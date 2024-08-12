import React, { useState } from 'react';
import './contactUs.css';
import { useDispatch, useSelector } from 'react-redux';
import { signInUserFailure, signInUserStart, signInUserSuccess } from '../../features/auth/authSlice';
import UiInput from './../../ui/UiInput';
import AuthService from './../../service/auth';
import UiTextarea from './../../ui/UiTextarea';
import ValidateForm from './../../helpers/ValidateForm';

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
		const { errors, placeholders } = ValidateForm({name, phoneNumber});
		if (Object.keys(errors).length > 0) {
			setFormErrors(errors);
			setPlaceholder(placeholders);
			setTimeout(() => setPlaceholder({}), 3000);
			return;
		}

		dispatch(signInUserStart());
		const user = { full_name: name, phone_number: phoneNumber, message };
		try {
			const response = await AuthService.userRegister(user);
			if (response && response.user) {
				dispatch(signInUserSuccess(response.user));
				setName('');
				setPhoneNumber('');
				setMessage('');
				setFormErrors({});
				setPlaceholder({});
				setSuccessMessage('Muvaffaqiyatli ro‘yxatdan o‘tdingiz!');
				setTimeout(() => {
					setSuccessMessage('');
				}, 3000);
			} else {
				throw new Error('Xizmatdan foydalangan foydalanuvchi ma\'lumotlari mavjud emas.');
			}
		} catch (error) {
			const errorMessage = error?.response?.data?.errors || 'Bir xatolik yuz berdi.';
			setTimeout(() => {
				errorMessage = error?.response?.data?.errors
			}, 3000);
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
						<form onSubmit={handleSubmit}>
							<UiInput
								type='text'
								placeholder={placeholder.name || 'Ismingizni kiriting'}
								state={name}
								setState={setName}
								hasError={!!formErrors.name}
							/>
							<UiInput
								type='text'
								placeholder={placeholder.phoneNumber || 'Telefon raqamingizni kiriting'}
								state={phoneNumber}
								setState={setPhoneNumber}
								hasError={!!formErrors.phoneNumber}
							/>
							<UiTextarea
								placeholder='Xabar'
								state={message}
								setState={setMessage}
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
