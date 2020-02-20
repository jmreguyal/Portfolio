import React from 'react';
import linkedin from './linkedin.png';
import fb from './fb.png';
import github from './github.png';

function Social() {
	return (
		<section class="mw5 mw7-ns center pa3 ph5-ns tc ba">
      <a href="https://www.linkedin.com/in/jmreguyal/">
        <img src={linkedin} class="w-10 br-100" alt="linkedin" />
      </a>
      <a href="https://www.facebook.com">
        <img src={fb} class="w-10 br-100" alt="fb" />
      </a>
      <a href="https://github.com/jmreguyal">
        <img src={github} class="w-10 br-100" alt="fb" />
      </a>
    </section>
	);
}


export default Social;