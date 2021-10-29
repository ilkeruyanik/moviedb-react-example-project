import React, { Component } from 'react';
import './thumb.css';

export default class Thumb extends Component {

    constructor(props){
        super(props);
        this.state = {
            thumbUp: false,
            thumbDown: false
        }
    }

    handleThumbUp = () => {
        this.setState({
            thumbUp: !this.state.thumbUp,
            thumbDown: this.state.thumbDown
        });
    }

    handleThumbDown = () => {
        this.setState({
            thumbUp: this.state.thumbUp,
            thumbDown: !this.state.thumbDown
        });
    }

    createThumbButtons = () => {
        if(this.state.thumbUp || this.state.thumbDown){
            if(this.state.thumbUp){
                return (
                    <div>
                        <span onClick={this.handleThumbUp} className='thumb-btn'>
                            <i className="bi bi-hand-thumbs-up-fill"/>
                        </span>
                    </div>
                );
            }else{
                return (
                    <div>
                        <span onClick={this.handleThumbDown} className='thumb-btn'>
                            <i className="bi bi-hand-thumbs-down-fill"/>
                        </span>
                    </div>
                );
            }
            
        }else{
            return (
                <div>
                    <span onClick={this.handleThumbUp} className='thumb-btn'>
                        <i className="bi bi-hand-thumbs-up"/>
                    </span>
                    <span onClick={this.handleThumbDown} className='thumb-btn'>
                        <i className="bi bi-hand-thumbs-down"/>
                    </span>
                </div>
            );
        }
    }

    render() {
        return this.createThumbButtons();
    }
}
