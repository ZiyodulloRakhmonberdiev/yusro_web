import './styles/errorPage.css'
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className='error-page'>
      <h1>Oops!</h1>
      <p>Kechirasiz. Kutilmagan xatolik yuz berdi!</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
