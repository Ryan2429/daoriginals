import React from 'react';
import './Images.css';
import aylee1 from './aylee1.jpg';
import annandy1 from './annandy1.jpg';
import bran3 from './bran3.jpg';
import cher1 from './cher1.jpg';
import christian1 from './christian1.jpg';
import cole1 from './cole1.jpg';
import dorian1 from './dorian1.jpg';
import dt1 from './dt1.jpg';
import gia1 from './gia1.jpg';
import hel2 from './hel2.jpg';
import jack1 from './jack1.jpg';
import juliette3 from './juliette3.jpg';
import krissy1 from './krissy1.jpg';
import lelani6 from './lelani6.jpg';
import mina2 from './mina2.jpg';
import nichelle1 from './nichelle1.jpg';
import paris2 from './paris2.jpg';
import pinup1 from './pinup1.jpg';
import punk1 from './punk1.jpg';
import roman1 from './roman1.jpg';
import ronan1 from './ronan1.jpg';
import stef1 from './stef1.jpg';
import tori6 from './tori6.jpg';
import chantilly1 from './chantilly1.JPG';
import victorian1 from './victorian1.jpg';
import candy from './candy.JPG';
import cam1 from './cam1.jpg';
import emily1 from './emily1.jpg';
import kh2 from './kh2.jpg';
import watercolor from './watercolors.JPG';



class Images extends React.Component {
    render() {

        return (
            <div className='row text-color' style={{fontFamily: 'Playfair Display', lineHeight: '180%'}}>
                <p style={{textAlign: 'center', fontSize: '2em', color: 'rgba(255,210,221, 1)', fontWeight: 'bold', fontFamily: 'Playfair Display', lineHeight: '180%'}}>
                   ~Welcome To My Gallery~
                    </p>
                <div className='column responsive'>
                <figcaption>Ann&Andy</figcaption>
                    <img src={ annandy1 } alt='Raggedy Ann & Andy'/>
                    <figcaption>Alice</figcaption>
                    <img src={ kh2 } alt="KH2"/>
                    <figcaption>Lelani</figcaption>
                    <img src={ lelani6 } alt="Lelani"/>
                    <figcaption>Bran</figcaption>
                    <img src={ bran3 } alt='Bran'/>
                    <figcaption>Stef</figcaption>
                    <img src={ stef1 } alt="Stef"/>
                    <figcaption>Gia</figcaption>
                    <img src={ gia1 } alt='Gia'/>
                </div>

                <div className='column responsive'>
                <figcaption>Mina</figcaption>
                    <img src={ mina2 } alt="Mina"/>
                    <figcaption>Daenerys</figcaption>
                    <img src={ dt1 } alt='Daenarys Targaryen'/>
                    <figcaption>Chantilly</figcaption>
                    <img src={ chantilly1 } alt="Chantilly"/>
                    <figcaption>Ronan</figcaption>
                    <img src={ ronan1 } alt="Ronan"/>
                    <figcaption>Juliette</figcaption>
                    <img src={ juliette3 } alt="Juliette"/>
                    <figcaption>Cam</figcaption>
                    <img src={ cam1 } alt="Cam"/>
                </div>

                <div className='column responsive'> 
                <figcaption>Watercolor</figcaption>
                    <img src={ watercolor } alt='Watercolors'/>
                    <figcaption>Nichelle</figcaption>
                    <img src={ nichelle1 } alt="Nichelle"/>
                    <figcaption>Tori</figcaption>
                    <img src={ tori6 } alt="Tori"/>
                    <figcaption>Jack</figcaption>
                    <img src={ jack1 } alt='Jack'/>
                    <figcaption>Punk</figcaption>
                    <img src={ punk1 } alt="Punk"/>
                    <figcaption>Dorian</figcaption>
                    <img src={ dorian1 } alt='Dorian'/>
                    
                </div>

                <div className='column responsive'>
                <figcaption>Victorian</figcaption>
                    <img src={ victorian1 } alt='Victorian'/>
                    <figcaption>Pinup</figcaption>
                    <img src={ pinup1 } alt="Pinup"/>
                    <figcaption>Cole</figcaption>
                    <img src={ cole1 } alt='Cole'/>
                    <figcaption>Roman</figcaption>
                    <img src={ roman1 } alt="Roman"/>
                    <figcaption>Krissy</figcaption>
                    <img src={ krissy1 } alt="Krissy"/>
                    <figcaption>Hel</figcaption>
                    <img src={ hel2 } alt='Hel'/>
                    </div>

                <div className='column responsive'>
                <figcaption>Candy</figcaption>
                    <img src={ candy } alt="Candy"/>
                    <figcaption>Cher</figcaption>
                    <img src={ cher1 } alt='Cher'/>
                    <figcaption>Emily</figcaption>
                    <img src={ emily1 } alt='Emily'/>
                    <figcaption>Christian</figcaption>
                    <img src={ christian1 } alt='Christian'/>
                    <figcaption>Aylee</figcaption>
                    <img src={ aylee1 } alt='Aylee'/>
                    <figcaption>Paris</figcaption>
                    <img src={ paris2 } alt="Paris"/>  
                </div>

            </div>
            
        );
    }
}

export default Images;