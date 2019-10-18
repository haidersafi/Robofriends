import React from 'react';

const Searchbox=({searchChange})=>{
	return(
		<div<input onChange={searchChange} className=' tc mb2 f3 pa2 ba b--green bg-lightest-green' type='search' placeholder='Search Robots'/></div>)
}
export default Searchbox;