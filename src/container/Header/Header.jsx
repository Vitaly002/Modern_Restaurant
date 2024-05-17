import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new flavour" />
      <h1 className='app__header-h1'>The Key to Fine Dining</h1>
      <p className='p__opensans' style={{margin: '2rem 0'}}>Welcome to Gericht Dining, where culinary excellence meets unparalleled sophistication. Our website is the gateway to a world of fine dining experiences, meticulously crafted to tantalize your taste buds and elevate your dining encounters. With a commitment to excellence in every dish, Gericht invites you on a gastronomic journey like no other. Discover the key to fine dining with us</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
