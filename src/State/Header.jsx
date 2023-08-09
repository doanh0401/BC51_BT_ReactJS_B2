import React, { Component } from 'react'
import style from "./style.module.css";

export default class Header extends Component {
  render() {
    return (
      <div className={`${style.visibility} text-center text-white p-4`}>TRY GLASSES APP ONLINE</div>
    )
  }
}
