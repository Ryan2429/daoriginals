import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

/*replace link tags with href in the ul below to change from react router to default "<a href="/"> </a>" on opening and closing tags*/



const Navigation = () => {
  return (
    <nav style={{marginBottom: '50px'}}>
      <div className="nav-wrapper" style={{fontFamily: 'Playfair Display', lineHeight: '180%'}}>
        <Link to='/' className="brand-logo">
        <h6 className="flow-text" style={{fontSize: '35px', paddingLeft: '30px', paddingTop: '5px', fontWeight: 'bold', letterSpacing: '2px'}}>
        DawnAldousOriginals
        </h6>
        </Link>
        <a href="/#" data-activates="mobile-demo" className="button-collapse" style={{color: 'rgba(0, 181, 204, 1)'}}><i className="material-icons">menu</i></a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to='/home'><h5 style={{fontSize: '28px', fontWeight: 'bold', marginTop: '16px', paddingRight: '20px'}}>Home</h5></Link></li> 
          <li><Link to='/about'><h5 style={{fontSize: '28px', fontWeight: 'bold', marginTop: '16px', paddingRight: '20px'}}>About</h5></Link></li>
          <li><Link to='/contact'><h5 style={{fontSize: '28px', fontWeight: 'bold', marginTop: '16px', paddingRight: '20px'}}>Contact</h5></Link></li>
        </ul>
        <ul className="side-nav" id="mobile-demo" style={{backgroundColor: 'rgba(255,210,221, 1)'}}>
        <li><a href='/home' style={{color: 'rgba(0, 181, 204, 1)', fontWeight: 'bold', fontSize: '20px'}}><p>DawnAldousOriginals</p></a></li>
        <li><a href='/home' style={{color: 'rgba(0, 181, 204, 1)', fontWeight: 'bold', fontSize: '15px'}}>Home</a></li>
        <li><a href='/About' style={{color: 'rgba(0, 181, 204, 1)', fontWeight: 'bold', fontSize: '15px'}}>About</a></li>
        <li><a href='/Contact' style={{color: 'rgba(0, 181, 204, 1)', fontWeight: 'bold', fontSize: '15px'}}>Contact</a></li>
  </ul>
      </div>
    </nav>
  )
}



export default Navigation;





