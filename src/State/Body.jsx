import React, { Component } from "react";
import Display from "./Display";
import Item from "./Item";
import style from "./style.module.css";
import data from "../data/dataGlasses.json";

export default class Body extends Component {
  state = {
    glassesDetail: data[0]
  };

  handleChange = (element) => {
    this.setState({
      glassesDetail: element
    });
  };

  render() {
    return (
      <div className={`${style.bgimg}`}>
        <Display detail={this.state.glassesDetail} />
        <Item data={data} 
        handleChange={this.handleChange}/>
      </div>
    );
  }
}
