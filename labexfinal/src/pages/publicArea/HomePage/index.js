import Button from '@material-ui/core/Button';
import { useContext } from 'react';
import GlobalStateContext from '../../../global/GlobalStateContext';

const HomePage = () => {
  return (
    <>
      <Button variant="contained" color='secondary'>
        Login
      </Button>

      <Button variant="contained" color='secondary'>
        Trips
      </Button>
    </>
  )
}

export default HomePage;
