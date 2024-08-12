import React from 'react';
import { Route } from 'react-router-dom';
import AdminLayout from '../layouts/AdminLayout';
import PrivateRoute from '../components/admin/privateRoute/PrivateRoute';
import Qulayliklar from './../pages/admin/qulayliklar/Qulayliklar';
import Azolar from '../pages/admin/azolar/Azolar';

const AdminRoutes = (
    <Route path='/admin' element={<PrivateRoute />}>
        <Route element={<AdminLayout />}>
            <Route path='comforts' element={<Qulayliklar />} />
            <Route path='members' element={<Azolar />} />
        </Route>
    </Route>
);

export default AdminRoutes;
