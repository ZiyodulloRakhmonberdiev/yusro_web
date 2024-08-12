import './CommentPost.css';
import React, { useState } from 'react';
import UiInput from './../../ui/UiInput';
import { useDispatch, useSelector } from 'react-redux';
import { postComment } from './../../features/alice/commentSlice';
import ValidateForm from '../../helpers/ValidateForm';
import Loader from './../../ui/Loader';
import UiTextarea from '../../ui/UiTextarea';

function CommentPost({ article, id }) {
    const [name, setName] = useState('');
    const [text, setText] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [formErrors, setFormErrors] = useState({});
    const [placeholder, setPlaceholder] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const dispatch = useDispatch();
    const { isLoading, error } = useSelector(state => state.comments);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { errors, placeholder } = ValidateForm({ name, phoneNumber, text });
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            setPlaceholder(placeholder);
            setTimeout(() => setPlaceholder({}), 3000);
            return;
        }

        const user = { article: id, full_name: name, phone_number: phoneNumber, text };
        try {
            const response = await dispatch(postComment({ user })).unwrap();
            if (response) {
                setName('');
                setPhoneNumber('');
                setText('');
                setFormErrors({});
                setPlaceholder({});
                setSuccessMessage('Muvaffaqiyatli ro‘yxatdan o‘tdingiz!');
                setTimeout(() => {
                    setSuccessMessage('');
                }, 3000);
            }
        } catch (error) {
            setFormErrors({ global: error.message || error });
        }
    };

    return (
        <div className="comment-post">
            <div className="title">
                <h1>Izohingizni qoldiring</h1>
                <p>Sizning telefon raqamingiz ko'rsatilmaydi! Talab qilinadigan joylar belgilangan</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <UiInput
                        type="text"
                        state={name}
                        placeholder={placeholder.name || "Ismingizni kiriting"}
                        setState={setName}
                        hasError={!!formErrors.name}
                    />
                    <UiInput
                        type="text"
                        state={phoneNumber}
                        placeholder={placeholder.phoneNumber || "Telefon raqamingizni kiriting"}
                        setState={setPhoneNumber}
                        hasError={!!formErrors.phoneNumber}
                    />
                    <UiTextarea
                        placeholder='Xabar'
                        state={text}
                        setState={setText}
                    />
                </div>
                {isLoading && <Loader />}
                {formErrors.global && <div className="error">{formErrors.global}</div>}
                {successMessage && <div className="success">{successMessage}</div>}
                <button type="submit" disabled={isLoading}>
                    {isLoading ? "Yuborilmoqda..." : "Izoh Qoldirish"}
                </button>
            </form>
        </div>
    );
}

export default CommentPost;
