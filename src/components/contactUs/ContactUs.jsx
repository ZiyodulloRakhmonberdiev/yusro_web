// import React, { useState } from 'react';
// import './contactUs.css';
// import axios from 'axios';
// import UiInput from './../../ui/UiInput';
// import UiTextarea from './../../ui/UiTextarea';
// import ValidateForm from './../../helpers/ValidateForm';

// function ContactUs() {
//   const [name, setName] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [message, setMessage] = useState('');
//   const [formErrors, setFormErrors] = useState({});
//   const [placeholder, setPlaceholder] = useState({});
//   const [successMessage, setSuccessMessage] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { errors, placeholders } = ValidateForm({ name, phoneNumber });
// 		console.log(errors);
		
//     if (Object.keys(errors).length > 0) {
//       setFormErrors(errors);
//       setPlaceholder(placeholders);
//       setTimeout(() => setPlaceholder({}), 3000);
//       return;
//     }

//     setIsLoading(true);
//     const data = { full_name: name, phone_number: phoneNumber, text: message };

//     try {
//       const response = await axios.post('http://95.46.96.78:7777/api/v1/main/application-create/', data);
//       if (response.status === 201) {
//         setName('');
//         setPhoneNumber('');
//         setMessage('');
//         setFormErrors({});
//         setPlaceholder({});
//         setSuccessMessage('Muvaffaqiyatli yuborildi');
//         setTimeout(() => {
//           setSuccessMessage('');
//         }, 3000);
//       } else {
//         throw new Error('Xatolik yuz berdi!');
//       }
//     } catch (error) {
//       const errorMessage = error?.response?.data?.errors || 'Bir xatolik yuz berdi!';
//       setFormErrors({ global: errorMessage });
//       setError(errorMessage);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className='contact-us-section'>
//       <div className='form-wrapper'>
//         {successMessage ? (
//           <div className='success-message'>
//             <h2>{successMessage}</h2>
//           </div>
//         ) : (
//           <>
//             <h2 className='title'>Hoziroq ro'yxatdan o'ting</h2>
//             <p>va chegirmaga ega bo'ling</p>
//             <form onSubmit={handleSubmit}>
//               <UiInput
//                 type='text'
//                 placeholder={placeholder.name || 'Ismingizni kiriting'}
//                 state={name}
//                 setState={setName}
//                 hasError={!!formErrors.name}
//               />
//               <UiInput
//                 type='text'
//                 placeholder={placeholder.phoneNumber || 'Telefon raqamingizni kiriting'}
//                 state={phoneNumber}
//                 setState={setPhoneNumber}
//                 hasError={!!formErrors.phoneNumber}
//               />
//               <UiTextarea
//                 placeholder='Xabar'
//                 state={message}
//                 setState={setMessage}
//               />
//               <button type='submit' disabled={isLoading}>{isLoading ? 'YUBORILMOQDA...' : 'YUBORISH'}</button>
//               {formErrors.global && <p className="error">{formErrors.global}</p>}
//               {error && <p className="error">{error}</p>}
//             </form>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ContactUs;


import React, { useState } from 'react';
import axios from 'axios';
import sec_pattern from "../../icons/sec_pattern.png"
import './contactUs.css'; // Ensure you have appropriate styling

function ContactUs() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const [placeholder, setPlaceholder] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Simple validation
    const errors = {};
    const placeholders = {};
    if (!name) {
      errors.name = 'Ism kiritish shart!';
      placeholders.name = 'Ism kiritish shart!';
    }
    if (!phoneNumber) {
      errors.phoneNumber = 'Telefon kiritish shart!';
      placeholders.phoneNumber = 'Telefon kiritish shart!';
    }
    if (!message) {
      errors.message = 'Xabar kiritish shart!';
      placeholders.message = 'Xabar kiritish shart!';
    }
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setPlaceholder(placeholders);
      setTimeout(() => setPlaceholder({}), 3000);
      return;
    }

    setIsLoading(true);
    const data = { full_name: name, telephone: phoneNumber, text: message };

    try {
      const response = await axios.post('http://95.46.96.78:7777/api/v1/main/application-create/', data);
      if (response.status === 201) {
        setName('');
        setPhoneNumber('');
        setMessage('');
        setFormErrors({});
        setPlaceholder({});
        setSuccessMessage('Muvaffaqiyatli yuborildi');
        setTimeout(() => {
          setSuccessMessage('');
        }, 3000);
      } else {
        throw new Error('Xatolik yuz berdi!');
      }
    } catch (error) {
      console.error('Error response:', error.response);
      const errorMessage = error?.response?.data?.errors || 'Bir xatolik yuz berdi.';
      setFormErrors({ global: errorMessage });
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='contact-us-section'>
      <div className='wrapper'>
				<img src={sec_pattern} alt="" />
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
              <div className="form-group">
                <input
                  type='text'
                  placeholder={placeholder.name || 'Ismingizni kiriting'}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`input ${formErrors.name ? 'error-input' : ''}`}
                />
              </div>
              <div className="form-group">
                <input
                  type='text'
                  placeholder={placeholder.phoneNumber || 'Telefon raqamingizni kiriting'}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className={`input ${formErrors.phoneNumber ? 'error-input' : ''}`}
                  />
              </div>
              <div className="form-group">
                <textarea
                  placeholder={placeholder.message || 'Xabarni kiriting'}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`input ${formErrors.message ? 'error-input' : ''}`}
                />
              </div>
              <button type='submit' disabled={isLoading}>
                {isLoading ? 'YUBORILMOQDA...' : 'YUBORISH'}
              </button>
              {/* {formErrors.global && <p className="error">{formErrors.global}</p>}
              {error && <p className="error">{error}</p>} */}
            </form>
          </>
        )}
      </div>
			</div>
    </div>
  );
}

export default ContactUs;
