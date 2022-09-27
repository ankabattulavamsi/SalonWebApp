import React ,{Component ,Fragment}from 'react'
import { Outlet} from 'react-router-dom';
import Footer from '../../components/common/Footer/Footer';
import Navbar from '../../components/common/Navbar/Navbar';


class  LandingPageNavigation extends Component {
  
    render(){
        return (
            <Fragment>
             <Navbar/>
            <Outlet/>
            <Footer />
            </Fragment>
       )
    }
}

export default LandingPageNavigation;