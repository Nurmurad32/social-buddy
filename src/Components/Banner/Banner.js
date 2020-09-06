import React from 'react';
import banner from '../../images/copy.png';
import Footer from '../Footer/Footer';

const Banner = () => {
    return (
        <div class="banner-img" >
          <img src={banner} alt="" style={{width: '100%' , height : '600px'}}/>
          <Footer></Footer>
        </div>
        
    );
};

export default Banner;