import React from 'react';
import './Navigation.css';
import Dawn from './Dawn_Aldous.jpg';

const About = () => {
    return (
        <div style={{marginRight: '5%', marginLeft: '5%'}}>
        <img src={ Dawn } alt="Dawn Aldous" style={{maxHeight: '290px', maxWidth: '290px', borderRadius: '50%', float: 'right', marginLeft: '20px'}}/>
        <p style={{fontSize: '30px', fontFamily: 'Playfair Display', lineHeight: '180%', color: 'rgba(255,210,221, 1)', textShadow: '3px 3px rgba(0, 171, 194, 1)'}}>
        <span className='first-letter'>D</span>awn, an artist from Tampa, FL, has been creating fashion dolls and dresses for over 20 years!
        She is an artist of many talents who spends hours meticulously painting the same eyes over and over to bring lifelike realism to her projects. 
        Beginning with sewing her own teddy bears and making cute outfits for porcelain dolls she eventually entered the world of professional doll repaints.
        Ever since, she has worked with a variety of clients from all over the world on countless projects. Do you have a favorite character from a television show or movie?
        It doesn't matter how obscure or fantastical your interest might be, Dawn is an artist who can take your idea and sprint with it!
        <span className='underline'>If you can think it, there is a good chance that she can make it!</span>

        </p>
        </div>
    )
}

export default About;