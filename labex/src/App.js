import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/Home';
import CreateTripPage from './pages/areaPrivada/CreateTripPage';
import AdminHome from './pages/areaPrivada/Privada';
import TripsDetails from './pages/areaPrivada/TripDetails';
import ApplicationFormPage from './pages/areaPubilca/ApplicationFormPage';
import ListTrips from './pages/areaPubilca/ListTrips';
import LoginPage from './pages/areaPubilca/LoginPage';

function App() {
  return (
    <Router>

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

    </Router>
  );
}

export default App;