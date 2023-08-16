import React, { Component } from 'react'
import Header from './Header'
import Body from './Body'
import 'bootstrap/dist/css/bootstrap.css';

export default class BaiTapState extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
      </div>
    )
  }
}
