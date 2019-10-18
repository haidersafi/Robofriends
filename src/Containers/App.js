import React,{ Component } from 'react';
import { connect } from 'react-redux';
import Cardlist from'../Components/Cardlist'
import Searchbox from '../Components//Searchbox';
import './App.css'
import Errorboundary from '../Components/Errorboundary';
import Scroll from '../Components/Scroll';


import { setSearchField,requestRobots } from '../action';

const mapStateToProps = state =>{
	return{
	searchField:state.searchRobots.searchField,
	robots:state.requestRobots.robots,
	isPending:state.requestRobots.isPending,
	error:state.requestRobots.error
}
}
	

const mapDispatchToProps = (dispatch) => {
	return{
	onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
	onRequestRobots:()=> dispatch(requestRobots())
    }
}

class App extends Component {

	

	componentDidMount()
	{
		this.props.onRequestRobots();
	}
	
	 render()
	 {
 	const {searchField,onSearchChange,robots,isPending}=this.props;
     const filterrobots=robots.filter(robot=>robot.name.toLowerCase().includes(searchField.toLowerCase()));
    return isPending?<h1>loading</h1>:(
      <div className='tc'>
      <h3 className="f1">RoboFriends</h3>
      <Searchbox searchChange={onSearchChange}/> 
      <Scroll><Errorboundary><Cardlist robots={filterrobots}/></Errorboundary></Scroll></div>)
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);



























