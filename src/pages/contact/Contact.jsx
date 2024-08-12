import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './contact.css';
import { signInUserFailure, signInUserStart, signInUserSuccess } from '../../features/auth/authSlice';
import ExtraPagesHeader from './../../components/extraPagesHeader/ExtraPagesHeader';
import images from './../../images/index';
import UiInput from './../../ui/UiInput';
import AuthService from './../../service/auth';
import UiTextarea from './../../ui/UiTextarea';

function Contact() {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [messageGoal, setMessageGoal] = useState('');
    const [formErrors, setFormErrors] = useState({});
    const [placeholder, setPlaceholder] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const dispatch = useDispatch();
    const { isLoading, error } = useSelector(state => state.auth);

    const validateForm = () => {
        const errors = {};
        const placeholders = {};
        if (!name) {
            errors.name = "Ism maydoni talab qilinadi.";
            placeholders.name = "Ism maydoni talab qilinadi.";
        }
        if (!phoneNumber) {
            errors.phoneNumber = "Telefon raqami maydoni talab qilinadi.";
            placeholders.phoneNumber = "Telefon raqami maydoni talab qilinadi.";
        }
        if (!messageGoal) {
            errors.messageGoal = "Xabar maqsadi maydoni talab qilinadi.";
            placeholders.messageGoal = "Xabar maqsadi maydoni talab qilinadi.";
        }
        if (!message) {
            errors.message = "Xabar maydoni talab qilinadi.";
            placeholders.message = "Xabar maydoni talab qilinadi.";
        }
        return { errors, placeholders };
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { errors, placeholders } = validateForm();
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            setPlaceholder(placeholders);
            setTimeout(() => setPlaceholder({}), 3000);
            return;
        }

        dispatch(signInUserStart('contact'));
        const user = {
            full_name: name,
            phone_number: phoneNumber,
            email,
            message,
            message_goal: messageGoal,
        };
        try {
            const response = await AuthService.discussionCreate(user);
            dispatch(signInUserSuccess({ user: response.user, type: 'contact' }));
            setName('');
            setPhoneNumber('');
            setEmail('');
            setMessage('');
            setMessageGoal('');
            setFormErrors({});
            setPlaceholder({});
            setSuccessMessage('Muvaffaqiyatli Yuborildi!');
            setTimeout(() => {
                setSuccessMessage('');
            }, 3000);
        } catch (error) {
            dispatch(signInUserFailure({ error: error.response.data.errors, type: 'contact' }));
        }
    };

    return (
        <div className='contact-page'>
            <ExtraPagesHeader />

            <div className="container">
                <div className="contact-wrapper">
                    <div className="contact-info">
                        <div className="title">
                            <p>Biz bilan aloqada bo'ling</p>
                        </div>
                        <div className="details">
                            <div className="detail">
                                <img src={images.location2} alt="" />
                                <div className="about">
                                    <span>Bizning manzil</span>
                                    <p>Farg'ona vilyati farg'ona shahar</p>
                                </div>
                            </div>
                            <div className="detail">
                                <img src={images.phone} alt="" />
                                <div className="about">
                                    <span>24/7 aloqada</span>
                                    <p>+998 (88) 511 11 66</p>
                                </div>
                            </div>
                            <div className="detail">
                                <img src={images.message} alt="" />
                                <div className="about">
                                    <span>Bizga xabar qoldiring</span>
                                    <p>admin@yusro.uz</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59915.49844840892!2d69.20407624303485!3d41.31115128493007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4e71171a0e5%3A0x7d64b1d6d5e1c0f4!2z0J3QsNGI0LrQtdC90LjRhtC60LDRjywg0KLQvtC00LDQvQ!5e0!3m2!1suz!2s!4v1688476828371!5m2!1suz!2s"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Google Map"
                            className='map'
                        ></iframe>
                    </div>
                </div>
                <div className="contact-form">
                    <h2>Bizga xabar yuboring</h2>
                    <form>
                        <div className="form-group">
                            <UiInput
                                type='text'
                                placeholder={placeholder.name || 'Ismingizni kiriting'}
                                state={name}
                                setState={setName}
                                hasError={!!formErrors.name}
                            />
                            <UiInput
                                type='text'
                                placeholder={placeholder.email || 'Emailingni kiriting'}
                                state={email}
                                setState={setEmail}
                                hasError={!!formErrors.email}
                            />
                        </div>
                        <div className="form-group">
                            <UiInput
                                type='text'
                                placeholder={placeholder.phoneNumber || 'Telefon raqamingizni kiriting'}
                                state={phoneNumber}
                                setState={setPhoneNumber}
                                hasError={!!formErrors.phoneNumber}
                            />
                            <UiInput
                                type='text'
                                placeholder={placeholder.messageGoal || 'Xabarning maqsadi'}
                                state={messageGoal}
                                setState={setMessageGoal}
                                hasError={!!formErrors.messageGoal}
                            />
                        </div>
                        <div className="form-group">
                            <UiTextarea
                                type='text'
                                placeholder={placeholder.message || 'Xabaringizni kiriting'}
                                state={message}
                                setState={setMessage}
                                hasError={!!formErrors.message}
                            />
                        </div>
                        <button onClick={handleSubmit} type="submit">Yuborish</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
