import React from 'react';
import './Image.css';
import pic from './pic2.jpg';


function Image() {
	return (
	<article class="vh-80 w-100 ba">
  		<div class="dtc v-mid tc black ph3 ph4-l">
    		<img src={pic} class="w-25 br-100 tc" alt="night sky over land" />
    		<h1 class="f2 lh-copy descr">Tech-enthusiast and learner</h1>
  		</div>
	</article>
	);
}


export default Image;