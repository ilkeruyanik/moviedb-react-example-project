import React, { Component } from 'react';
import Slider from '../sliderComponent/slider';
import Tab from '../tabComponent/tab';
import './movieList.css';

import {getStreamingMovie, getTrends} from '../../services/httpService';

export default class MovieList extends Component {

    constructor(props){
        super(props);
        this.state = {
            type: this.props.menu_items[0].type,
            movies: []
        };
    }

    componentDidMount(){
        this.getMovieData(this.state.type);
        
    }

    getMovieData = (type) => {
        if(type==='now_playing'){
            getStreamingMovie().then((response) => {
                this.setState({
                    ...this.state,
                    movies: response.data.results
                });
                
            });
        }else if(type==='day'){
            getTrends('day').then((response) => {
                this.setState({
                ...this.state,
                movies: response.data.results
            });
                console.log(this.state);
            });
            
        }else if(type==='week'){
            getTrends('week').then((response) => {
                this.setState({
                    ...this.state,
                    movies: response.data.results
                });
            });
        }
    }

    render() {
        return (
            <div>
                <Tab menu_items={this.props.menu_items} name={this.props.name}/>
                <div className='slider-container'>
                    <Slider movies={this.state.movies}/>
                </div>
            </div>
        )
    }
}
