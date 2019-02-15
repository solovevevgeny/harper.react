import React, { Component } from 'react';
import { Tabs } from 'antd';
import categories from './categories.json';


class MainCategories extends Component {

    render() {
    const TabPane = Tabs.TabPane;


    console.log(categories);

    return (
    	<Tabs defaultActiveKey='1'>
	        <TabPane tab="Седельные тягачи" key="1">
	        	<ul>
	        		<li><a href="">Freightliner</a></li>
	        		<li><a href="">International</a></li>	        		
	        		<li><a href="">Kenworth</a></li>	        		
	        		<li><a href="">VOLVO</a></li>	        		
	        		<li><a href="">Peterbilt</a></li>
	        		<li><a href="">Scania</a></li>
	        		<li><a href="">MAN</a></li>
	        	</ul>
	        </TabPane>


	        <TabPane tab="Грузовики" key="2">
	        	<ul>
	        		<li><a href="">Isuzu</a></li>
	        		<li><a href="">Toyota</a></li>	        		
	        		<li><a href="">Камаз</a></li>	        		
	        	</ul>
	        </TabPane>

	        <TabPane tab="Спецтехника" key="3">

	        	<ul>
	        		<li><a href="">JCB</a></li>
	        		<li><a href="">CAT</a></li>	        		
	        		<li><a href="">KAMATSU</a></li>
	        		<li><a href="">HITACHI</a></li>
	        		<li><a href="">LIEBHERR</a></li>	        		
	        	</ul>


	        </TabPane>	        

        </Tabs>
        );
    }
  }

export default MainCategories;
