import React, { Component } from 'react';
import './Tour.scss';

export default class Tour extends Component {
    state ={
        showInfo: false
    }
    handleInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }
    render() {
        const {id, name, price, info, img} = this.props.tour
        const {removeTour} = this.props
        return (
            <article className='tour'>
                <div className='img-container'>
                    <img 
                     src={img}
                     alt=''
                     />
                <span className='close-btn' onClick={() => {removeTour(id)}}>
                    <i className='fas fa-window-close'/>
                </span>
                </div>
                <div className='tour-info'>
                    <h3> {name} </h3>
                    <h4> {price} </h4>
                    <h5>DESCRIPTION{""}
                        <span onClick={this.handleInfo}>
                            <i className='fas fa-caret-square-down'/>
                        </span>
                        {this.state.showInfo && <p> {info} </p> }
                    </h5>   
                </div>
            </article>
        )
    }
}
