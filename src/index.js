import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar.js'
import Products from './components/Products.js'
import ReactDOM from 'react-dom';
import Obj from './Products.js';

class App extends Component{
	constructor(){
		super();
		this.state = {
			products: [],
		};
	}

	getProducts(){
		const url = "./src/products.js";

		axios.get(url)
			.then(response => {
        console.log(response.data)
				this.setState({
					products : response.data
				})
			})
	}
	componentWillMount(){
		this.getProducts();
	}

  render() {
    return (
      <div>
        <Navbar/>
        <Products/>
      </div>
    );
  }

}

ReactDOM.render(
	<App />,
  	document.getElementById('root')
);

export default App;
