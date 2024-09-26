
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import About from './Screens/About';
import HomePage from './Screens/HomePage';
import Gallery from './Screens/Gallery';
import Birthday from './Screens/Birthday';
import ContactUs from './Screens/ContactUs';




const MainComponents = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/About' element={<About />} />
                    <Route path='/Gallery' element={<Gallery />} />
                    <Route path='/Birthday' element={<Birthday />} />
                    <Route path='/contactus' element={<ContactUs />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}



export default MainComponents;

