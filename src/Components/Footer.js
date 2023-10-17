import React from 'react'
import './Footer.css'
import logo from '../Assets/logo.png'

const Footer = () => {
  return (
    <div className="footer">
        <div className="container">
            <div className="column1">
                <img src={logo} alt="" />
                <p>Origa.market is operated by Origa Technologies <br />
                Private Limited (CIN: U74999MH2021PTC366771). Origa <br />
                Technologies Private Limited provides end to end <br />
                equipment solutions, for MSME'S and Healthcare, from <br />
                procurement and maintenance to disposal</p>
            </div>
            <div className="column2">
                <h3>Origa</h3>
                <p>About us</p>
                <p>FAQs</p>
                <p>Origa Network</p>
                <p>Partner with Us</p>
            </div>
            <div className="column3">
                <h3>Used Machinery</h3>
                <p>Buy</p>
                <p>Sell</p>
                <p>Service</p>
                <p>Store</p>
            </div>
            <div className="column4">
                <h3>Contact Us:</h3>
                <p>info@origa.com</p>
                <p>+91-94305 45234</p>
                <p>Andheri East, Mumbai</p>
            </div>
        </div>
        <div className="line"></div>
    </div>
  )
}

export default Footer;
