import React from 'react';
import { assets } from '../assets/frontend_assets/assets';

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>For a Better Experience, Download <br />Tomato App</p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="Download on Play Store" />
        <img src={assets.app_store} alt="Download on App Store" />
      </div>
    </div>
  );
}

export default AppDownload;
