import React, { Component } from 'react';
import Slider from '../sliderComponent/slider';
import Tab from '../tabComponent/tab';
import './movieList.css';

import { getRequest } from '../../services/httpService';

export default class MovieList extends Component {

    constructor(props){
        super(props);
        this.state = {
            uri: this.props.menu_items[0].uri,
            movies: []
        };
    }

    componentDidMount(){
        this.getMovieData(this.state.uri);
        
    }

    getMovieData = (uri) => {

        getRequest(uri).then((response) => {
            this.setState({
                uri: uri,
                movies: response.data.results
            });
        });
    }

    handleTab = (uri) => {
        this.getMovieData(uri);
    }

    render() {
        return (
            <div>
                <Tab handleTab={this.handleTab} activeTab={this.state.uri} menu_items={this.props.menu_items} name={this.props.name}/>
                <div className='slider-container'>
                    <Slider movies={this.state.movies}/>
                </div>
            </div>
        )
    }
}
