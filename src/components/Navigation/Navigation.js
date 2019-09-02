import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

/*replace link tags with href in the ul below to change from react router to default "<a href="/"> </a>" on opening and closing tags*/



const Navigation = () => {
  return (
    <nav style={{marginBottom: '50px'}}>
      <div className="nav-wrapper" style={{fontFamily: 'Playfair Display', lineHeight: '180%'}}>
        <Link to='/daoriginals' className="brand-logo">
        <h6 className="flow-text" style={{fontSize: '35px', paddingLeft: '30px', paddingTop: '5px', fontWeight: 'bold', paddingLeft: '8%'}}>
        DawnAldousOriginals
        </h6>
        </Link>
        <a href="/#" data-activates="mobile-demo" className="button-collapse" style={{color: 'rgba(0, 181, 204, 1)'}}><i className="material-icons">menu</i></a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to='/daoriginals'><h5 style={{fontSize: '28px', fontWeight: 'bold', marginTop: '16px', paddingRight: '20px'}}>Home</h5></Link></li> 
          <li><Link to='/about'><h5 style={{fontSize: '28px', fontWeight: 'bold', marginTop: '16px', paddingRight: '20px'}}>About</h5></Link></li>
          <li><Link to='/contact'><h5 style={{fontSize: '28px', fontWeight: 'bold', marginTop: '16px', paddingRight: '20px'}}>Contact</h5></Link></li>
        </ul>
        <ul className="side-nav" id="mobile-demo" style={{backgroundColor: 'rgba(255,210,221, 1)'}}>
        <li><Link to='/daoriginals' style={{color: 'rgba(0, 181, 204, 1)', fontWeight: 'bold', fontSize: '20px'}}><p>DawnAldousOriginals</p></Link></li>
        <li><Link to='/daoriginals' style={{color: 'rgba(0, 181, 204, 1)', fontWeight: 'bold', fontSize: '15px'}}>Home</Link></li>
        <li><Link to='/about' style={{color: 'rgba(0, 181, 204, 1)', fontWeight: 'bold', fontSize: '15px'}}>About</Link></li>
        <li><Link to='/contact' style={{color: 'rgba(0, 181, 204, 1)', fontWeight: 'bold', fontSize: '15px'}}>Contact</Link></li>
  </ul>
      </div>
    </nav>
  )
}



export default Navigation;





