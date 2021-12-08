import HeaderApplication from "./components/HeaderApplication";
import MainApplication from "./components/MainApplication";

import { useParams } from 'react-router'


const ApplicationFormPage = () => {

  const param = useParams()

  return (
    <>
      <HeaderApplication />
      <MainApplication />
    </>
  )
}

export default ApplicationFormPage;
