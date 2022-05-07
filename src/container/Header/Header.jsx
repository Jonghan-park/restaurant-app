import React from 'react';

import './Header.css';
import {SubHeading} from '../../components'
import {images} from '../../constants'

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className="app__wrapper_info">
      <SubHeading title='Chase the new flavor' />
      <h1 className='app__header-h1'>The Key to Find Dining</h1>
      <p className="p__opensans" style={{ margin:'2rem 0' }}>If you're visiting this page, you're likely here because you're searching for a random sentence. Sometimes a random word just isn't enough, and that is where the random sentence generator comes into play.</p>
      <button type='button' className='custom__button'>Explore Munu</button>    
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
