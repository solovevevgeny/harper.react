import React, { Component } from 'react';
import { Tabs, Menu, Icons} from 'antd';
import { Button } from 'antd';


const API = "http://localhost:3000/menu.json";


class MainMenu extends Component {

	constructor(props){
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
            categories: [],
            mainMenu: []
		};
	}

	componentWillMount() {
		//var data;

		fetch(API)
			.then(response => response.json())
			.then(data => this.setState({ mainMenu: data }));

		//console.log()
	}

	
	

	render(){

       let mainMenuArray = this.state.mainMenu;

        
	
		return (

            <div>
            
                {mainMenuArray.map (function(menuItem,index){
                    return <Button>{menuItem.title}</Button>
                })}
                
            
            </div>		
        );


	}

}


export default MainMenu;
