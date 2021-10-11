import withPrivateRoute from '../../../components/Admin/WithPrivateRoute'
import Link from 'next/link'

const Ordine = () => {
    return(
        <div>
           <h1>singolo ordine</h1>
        </div>
    )
}

Ordine.getInitialProps = async props => {
   // console.info('##### Congratulations! You are authorized! ######', props);
    return {};
  };

  export default withPrivateRoute(Ordine);
