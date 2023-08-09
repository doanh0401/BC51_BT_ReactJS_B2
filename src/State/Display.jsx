import React, { Component } from "react";
import style from "./style.module.css";
export default class Display extends Component {
  render() {
    const {url,name,desc} = this.props.detail;
    return (
      <div
        className={`${style["py-150"]} d-flex justify-content-center pt-150`}
      >
        <div className={style.bg}>
          <img src="./glassesImage/model.jpg" alt="" height="350px" />
          <img
            className={style.displayGlasses}
            src={url}
            alt=""
          />
          <div className={style.layout}>
            <div className={style.layout__text}>
              <h3>{name}</h3>
              <p>{desc}</p>
            </div>
          </div>
        </div>
        <div className={style.bg}>
          <img className="mx-5" src="./glassesImage/model.jpg" alt="" height="350px" />
          <img id="changeImage"
            className={style.displayGlasses2}
            src=""
            alt=""
          />
        </div>
      </div>
    );
  }
}
