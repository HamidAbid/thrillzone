import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import './TopBar.css'
import WhiteParallogram from '../WhiteParallogram/WhiteParallogram';


const Topbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-xl sticky-top bg-white  p-3">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        <img src={logo} alt="logo"  className='img-fluid w-75'/>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse row justify-content-evenly" id="navbarNavDropdown">
                        {/* <WhiteParallogram > */}
                            <ul className="navbar-nav col-xl-8 fs-5 ps-5 d-flex gap-3 justify-content-evenly">

                                <li className="nav-item ">
                                    <NavLink className="nav-link mx-2 " aria-current="page" to="/" activeClassName="active">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link mx-2 text-blue" to="/About" activeClassName="active">About Us</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link mx-2 text-blue" to="/Birthday" activeClassName="active">PartyBooking</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link mx-2 text-blue" to="/Gallery" activeClassName="active">Gallery</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link mx-2 text-blue" to="/Birthday" activeClassName="active">Packages</NavLink>
                                </li>
                            </ul>
                        {/* </WhiteParallogram>   */}
                      

                        <div className='col-xl-2 ps-5'>
                            <NavLink to='/contactus'> <button class=" rounded-4 fs-5 btn btn-outline-primary">Lets Talk </button></NavLink>
                        </div>
                    </div>
                </div>
            </nav >
        </>
    );
}

export default Topbar;
