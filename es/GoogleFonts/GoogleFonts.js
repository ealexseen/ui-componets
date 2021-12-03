import React from 'react';
import GoogleFontLoader from 'react-google-font-loader';

const GoogleFonts = () => React.createElement(GoogleFontLoader, {
  fonts: [{
    font: 'Roboto',
    weights: [400, 700]
  }]
});

export default GoogleFonts;