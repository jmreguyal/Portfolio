import React from 'react';
import robofriendspic from './robofriendspic.JPG';
import { ReactTinyLink } from 'react-tiny-link'

function Portfolio() {
	return (
	<div>

	{/*title*/}
	<div class="mw9 center ph3-ns">
  		<div class="cf ph2-ns">
    		<div class="fl w-100 pa2">
      			<div class="outline bg-white pv4">
      				<h1 class="f1 lh-title tc bb bw1">Portfolio</h1>
      			</div>
    		</div>
  		</div>
	</div>

	{/*content*/}
	<div class="mw9 center ph3-ns">
  		<div class="cf ph2-ns">
    		<div class="fl w-100 w-50-ns pa2">
      			<div class="outline bg-white pv4 tc">
      				<a href="https://jmreguyal.github.io/robofriends/" class="grow dib link black db mw5 pa2 br2 ba b--black-10">
  						<img src={robofriendspic} class="db mb1 mw-100" />
  						<span class="db f6 pv2">Robofriends</span>
					</a>
      				{/*<a class="grow dib no-underline bg-pink black-90 pa5" href="https://jmreguyal.github.io/robofriends/" target="_blank">
      					<img src={robofriendspic} class="w-80 br3 ba bw2" alt="robo" />
      				</a>*/}
      			</div>
    		</div>
    		<div class="fl w-100 w-50-ns pa2">
      			<div class="outline bg-white pv4">
      				<h3 class="f1 lh-title tc bw1 underline">Robofriends</h3>
      				<p>This website uses an API that generates random robot pictures
      				for each contact card in the website. The website is also responsive
      				on whatever device you're using it.</p>	
      			</div>
    		</div>
  		</div>
	</div>

	</div>
	);
}


export default Portfolio;