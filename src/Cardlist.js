import React from 'react';
import Cards from './Cards';

const Cardlist=({robots})=>{
	return(
		<div>
		{
			robots.map(user=>{return(<Cards key={user.id} name={user.name} id={user.id} email={user.email}/>)})
		}</div>)
}
export default Cardlist;