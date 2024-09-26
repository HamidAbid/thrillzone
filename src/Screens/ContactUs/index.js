import React, { useRef, useState } from 'react'
import Topbar from '../../Components/Topbar'
import HeadSection from './HeadSection'
import IrrParallelogram from '../../Components/ContactUsLayout/ContactLayout'
import ContactUsImg from '../../assets/img/contactUs.png'
import emailjs from 'emailjs-com'
import Footer from '../../Components/Footer'

const ContactUs = () => {
    const [selectedItem, setSelectedItem] = useState("Auswählen...");
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        to_name: '',
        to_email: '',
        phoneNumber: '',
        service: '',
    });

    const selectBoxRef = useRef(null);

    const items = [
        { id: 'item1', title: 'Item 1' },
        { id: 'item2', title: 'Item 2' },
        { id: 'item3', title: 'Item 3' },
        { id: 'item4', title: 'Item 4' },
        { id: 'item5', title: 'Item 5' }
    ];

    const handleItemClick = (title) => {
        setSelectedItem(title);
        setIsOpen(false);
        setFormData({ ...formData, service: title });
    };

    const handleBlur = (event) => {
        if (!selectBoxRef.current.contains(event.relatedTarget)) {
            setIsOpen(false);
        }
    };

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send(
            'service_klvwyof',
            'template_tkjl33w',
            formData,
            'O2jj5boRYFHExFpJL'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully!');
            }, (error) => {
                console.log('FAILED...', error);
                alert('Failed to send message.');
            });
    };

    return (
        <>
             <Topbar />
            <div className="top-bg">
               
                {/* <div className="container">
                    <HeadSection />
                </div> */}
            </div>
            <div className='container'>
                <h1 className='text-blue fs-2vw pt-3 text-center'>LET'S TALK</h1>
                <p className=" fs-7vw text-center text-white mx-auto w-18ch mt-4" >Online Booking</p>
                <div className="col-12 contactborder position-relative">
                    <IrrParallelogram>
                        <form onSubmit={handleSubmit}>
                            <div className="row pad">
                                <div className="col-12 col-md-6 frst_sec">
                                    <p className="fs-3vw text-white" >Booking</p>
                                    <p className='font-poppins fs-16 text-white-80'>Sed ut perspiciatis unde </p>
                                    <label className='form-label text-white fw-500 font-poppins fs-14' >First Name</label>
                                    <input
                                        type="text"
                                        className='form-control bg-transparent text-white input-feild font-poppins fw-400'
                                        name="to_name"
                                        value={formData.to_name}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label className='form-label text-white fw-500 font-poppins fs-14' >Email address</label>
                                    <input
                                        type="email"
                                        className='form-control bg-transparent text-white input-feild font-poppins fw-400'
                                        name="to_email"
                                        value={formData.to_email}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label className='form-label text-white fw-500 font-poppins fs-14' >Phone Number</label>
                                    <input
                                        type="text"
                                        className='form-control bg-transparent text-white input-feild font-poppins fw-400'
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label className='form-label text-white fw-500 font-poppins fs-14' >Service</label>
                                    <div className={`contact-select mb-3 ${isOpen ? 'open' : ''}`} ref={selectBoxRef} tabIndex={0} onBlur={handleBlur}>
                                        <div className="summary radios form-control bg-transparent input-feild  text-white fw-500 font-poppins fs-14" aria-haspopup="listbox" aria-expanded={isOpen} onClick={handleToggle} onFocus={() => setIsOpen(true)}>
                                            {selectedItem}
                                            <input type="radio" className='text-white font-poppins fw-400' name="item" id="default" title="Auswählen..." checked={selectedItem === "Auswählen..."} readOnly />
                                            {items.map(item => (
                                                <input key={item.id} type="radio" className='text-white font-poppins fw-400' name="item" id={item.id} title={item.title} checked={selectedItem === item.title} readOnly />
                                            ))}
                                        </div>
                                        {isOpen && (
                                            <ul className="list" role="listbox">
                                                {items.map(item => (
                                                    <li key={item.id} role="option">
                                                        <label className='text-white fw-500 font-poppins fs-14' htmlFor={item.id} onClick={() => handleItemClick(item.title)}>
                                                            {item.title}
                                                        </label>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                    <button type="submit" className="white-image-button text-nowrap px-5 text-blue font-poppins-500  bg-transparent border-0 text-center fs-16 d-inline-block">Book Now</button>
                                </div>
                                <div className="col-12 col-md-6">
                                    <img className="w-100 h-100 object-fit-cover" src={ContactUsImg} alt="Contact Us" />
                                </div>
                            </div>
                        </form>
                    </IrrParallelogram>
                </div>
            </div>
            <section className="mt-5 position-relative overflow-hidden">
                    <Footer />
                </section>
        </>
    )
}

export default ContactUs
