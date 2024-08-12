import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './styles/errorPage.css';
import { Alert, AlertTitle } from '@mui/material';

function ValidationError() {
    const { error } = useSelector(state => state.adminAuth);
    const [visible, setVisible] = useState(true);

    const errorMessage = useCallback(() => {
        return Object.keys(error).map(name => {
            const msg = Array.isArray(error[name]) ? error[name].join(', ') : error[name];
            return `${name} - ${msg}`;
        });
    }, [error]);

    useEffect(() => {
        if (error) {
            setVisible(true);
            const timer = setTimeout(() => {
                setVisible(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [error]);

    return (
        error !== null && visible && errorMessage().map((err, index) => (
            <Alert key={index} severity="error" className='error-message'>
                <AlertTitle>Error</AlertTitle>
                {err == 'detail - No active account found with the given credentials' ? "Bunday foydalanuvchi mavjud emas" : err}
            </Alert>
        ))
    );
}

export default ValidationError;
