import React, { Component } from 'react';
import axios from 'axios';

class Product extends Component {

  constructor(props, context){
    super(props,context)
    this.state = {
      products: []
    };
  }

  getProducts(){
      const url="https://quarkbackend.com/getfile/sivadass/products";
  		axios.get(url)
  	   .then(response => {
          console.log(response)
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
        <p>Test anaofna fna fansf alknf aks fnaksnf anln</p>
      </div>
    );
  }
}

export default Product;
