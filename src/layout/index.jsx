import React, { Component } from 'react'
import S from './css/tonghop.module.css';
import Header from './header';
import Body from './body';
export default class Layout extends Component {
  render() {
    return (
      <div className={S['bg']}>
{/* header */}
        <Header></Header>
        <Body></Body>
      </div>
    )
  }
}
