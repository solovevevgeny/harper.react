import React from 'react';
import ReactDOM from 'react-dom';
import MainCategories from './components/MainCategories.js';
import MainMenu from './components/MainMenu.js';


import 'antd/dist/antd.css';  

ReactDOM.render(<MainMenu />, document.getElementById('MainMenu'));
ReactDOM.render(<MainCategories />, document.getElementById('categories'));


