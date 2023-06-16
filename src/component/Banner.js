import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
    return (
    <>
        <div className="banner-image">
            <div className="banner-text">
                <p>-We are the-</p>
                <h1>Best It Solution & Company</h1>
                <h1>In Global Community.</h1>
                <button type="button" className="btn-primary">Learn More </button>
                <button type="button" className="btn-secondary">Contact Us</button>
            </div>
        </div>        
    </>
    )
  }
}
