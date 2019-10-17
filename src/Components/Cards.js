import React from 'react';

const Cards=({name,id,email})=>{
	return(
		<div className='tc f3 grow bg-light-green br3 pa3 ma3 dib bw2 shadow-5 w-20'>
		<img alt='Pic not Availble' src={`https://robohash.org/${id}?size=200x200`}/>
		<div><h2>{name}</h2>
		<p>{email}</p>
		</div></div>)
}
export default Cards;