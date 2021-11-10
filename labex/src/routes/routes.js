import { Routes, Route } from 'react-router-dom'

import HomePage from '../pages/areaPubilca/HomePage';
import LoginPage from '../pages/areaPubilca/LoginPage'
import ListTrips from '../pages/areaPubilca/ListTrips';
import ApplicationFormPage from '../pages/areaPubilca/ApplicationFormPage';

import AdminHome from '../pages/areaPrivada/AdminHomePage';
import TripsDetails from '../pages/areaPrivada/TripDetails';
import CreateTripPage from '../pages/areaPrivada/CreateTripPage';

function Router() {

    return (

        <Routes>
            
            {/* Pública */}
            <Route path='/' element={<HomePage />} />
            <Route path='/trips/list' element={<ListTrips />} />
            <Route path='/trips/application' element={<ApplicationFormPage />}/>
            <Route path='/login' element={<LoginPage />}/>

            {/* Privada */}
            <Route path='/admin/trips/list' element={<AdminHome />} />
            <Route path='/admin/trips/create' element={<CreateTripPage />} />
            <Route path='/admin/trips/details' element={<TripsDetails />} />
                
        </Routes>
    );
}

export default Router;