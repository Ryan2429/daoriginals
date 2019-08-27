import React from 'react';
import './Navigation.css';

const Contact = () => {
    return (
        <div style={{paddingLeft: '10%', color: 'rgba(255,210,221, 1)', fontFamily: 'Playfair Display', lineHeight: '180%'}}>
        <h5>
        <p><span style={{fontWeight: 'bold', fontSize: '1.5em', textDecoration: 'underline', marginRight: '1%'}}>Hey!</span> I hope you enjoyed the tour! Thanks for viewing my portfolio!</p>
        <p>You can reach me by sending an email to: <span className='dao' style={{fontWeight: 'bold', fontSize: '1.1em'}}>Dawnaldousoriginals@yahoo.com</span> <span style={{textDecoration: 'underline'}}>OR</span> any of the following methods!</p>
        <div style={{marginTop: '5%'}}>
        <ul style={{fontWeight: 'bold', fontSize: '1.2em'}}>
            <li>
            <a className='link' rel="noopener noreferrer" href="https://www.facebook.com/dawnaldousoriginals" target="_blank">Facebook.com</a>
            </li>
            <li>
            <a className='link' rel="noopener noreferrer" href="https://www.ebay.com/str/dawnaldousoriginals" target="_blank">Ebay.com</a>
            </li>
            <li>
            <a className='link' rel="noopener noreferrer" href="https://www.etsy.com/shop/DAOFantasyArt" target="_blank">Etsy.com</a>
            </li>
        </ul>
            <p style={{marginTop: '5%'}}>I hope to hear from you soon, glad you dropped by!</p>
            <p style={{fontSize: '1.4em'}}>-Dawn</p>
        </div>
        </h5>
        </div>
    )
}

export default Contact;