import React from 'react';

const Searchbox=({searchChange})=>{
	return(
		<div className='pa2 '><input onChange={searchChange} className=' tc f3 pa3 ba b--green bg-lightest-green' type='search' placeholder='Search Robots'/></div>)
}
export default Searchbox;