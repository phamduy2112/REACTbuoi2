import React, { Component } from 'react'
import S from './css/tonghop.module.css';

export default class Header extends Component {
  render() {
    return (
        <div className={S['header']}>
        <h2>Try Glassess app online</h2>
    </div>
    )
  }
}
