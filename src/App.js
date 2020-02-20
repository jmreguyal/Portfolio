import React, { Component } from 'react';
import Header from './components/Header/Header';
import Image from './components/Image/Image';
import Body from './components/Body/Body';
import Social from './components/Social/Social';
import Portfolio from './components/Portfolio/Portfolio';

class App extends Component {
  render() {
  return (
  	<div>
    	<Header />
    	<Image />
    	<Body />
      <Portfolio />
    	<Social />
    </div>
    )
  }
}

export default App;
