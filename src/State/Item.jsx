import React, { Component } from 'react'
import style from "./style.module.css";
export default class Item extends Component {
  renderList = () => {
    const content = this.props.data.map((element,index) => {
      return <img onClick={()=>this.props.handleChange(element)} key={index} className={style.mx3} width="130px" src={element.url} alt="" />;
  })
  return content;
  }
  handleChange = (element) =>{
    return this.props.handleChange(element);
  }
  
  render() {
    return (
      <div className={`${style.listGlasses} d-flex flex-wrap mx-auto`}>
        {this.renderList()}
      </div>
    )
  }
}
