import React from 'react';

const BigCard = ({yourname})=>{
	if (yourname === ''){
		return(
			<div className="tc pa4 ma2 bw1 bg-light-blue mh10">
			<h2>Find your Robo image here!</h2>
			</div>
			)
	}
	return(
		<div className="tc pa4 ma2 bw1 bg-light-blue mh10">
		<img className="grow" src={`https://robohash.org/${yourname}?300x300`} alt="this is your robo" />
		<p>Dear {yourname}, I am your Robo! Right click and Save me.</p>
		</div>
		);
}

export default BigCard;