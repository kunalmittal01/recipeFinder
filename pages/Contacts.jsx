import React from 'react'
import Navbar from '../components/Navbar'

const Contacts = () => {
  return (
    <>
    <Navbar />
    <div className="contacts">
        <h1>Contact Us</h1>
        <div className="contacts-cont">
            <p>If you have any questions, feedback, or need support, feel free to reach out to us:</p>
            <ul>
                <li>Email: support@recipefinder.com</li>
                <li>Phone: (123) 456-7890</li>
                <li>Address: 123 Main St, Anytown, USA</li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Contacts