import React from 'react';


const SearchBox = ({searchField, searchChange})=>{
	return (
		<input className="tc bw1 ba pa3" 
		type = "search" 
		placeholder="Enter your Name here"
		onChange ={searchChange}/>
		)

}


export default SearchBox;
