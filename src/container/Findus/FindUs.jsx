import React from 'react';

import {SubHeading} from '../../components'
import {images} from '../../constants'

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className="app__wrapper_info">
      <SubHeading title='Contact' />
      <h1 className="headtext__cormorant" style={{marginBottom: '3rem'}}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">If you're visiting this page, you're likely here because you're searching for a random sentence. Sometimes a random word just isn't enough, and that is where the random sentence generator comes into play.</p>
        <p className="p__cormorant" style={{color:'#DCCA87', margin: '2rem 0'}}>Opening Hours</p>
        <p className="p__opensans"></p>
        <p className="p__opensans"></p>
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus" />
    </div>
  </div>
);

export default FindUs;
