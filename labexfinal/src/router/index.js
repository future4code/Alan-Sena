import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/publicArea/HomePage";
import TripsPage from "../pages/publicArea/TripsPage";
import ApplicatioFormPage from "../pages/publicArea/ApplicationFormPage";
import LoginPage from "../pages/publicArea/LoginPage";

import AdmHomePage from "../pages/privateArea/AdmHomePage";
import CreateTripPage from "../pages/privateArea/CreateTripPage";
import TripDetailsPage from "../pages/privateArea/TripDetailsPage";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />}/>
        <Route exact path="/trips" element={<TripsPage />}/>
        <Route exact path="/trips/application" element={<ApplicatioFormPage />}/>

        <Route exact path="/login" element={<LoginPage />}/>
        <Route exact path="/adm/home" element={<AdmHomePage />}/>
        <Route exact path="/adm/create-trip" element={<CreateTripPage />}/>
        <Route exact path="/adm/trip-detail" element={<TripDetailsPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;
