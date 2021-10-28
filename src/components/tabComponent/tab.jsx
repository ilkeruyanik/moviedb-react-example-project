import React, { Component } from 'react'
import './tab.css'

export default class Tab extends Component {

    constructor(props){
        super(props);
        this.state = {
            active_tab_index : 0 
        };
    }

    handleMenu = (index) => {
        this.setState({
            active_tab_index: index
        });
    }

    render() {

        const menu_items = this.props.menu_items;
        const menu = menu_items.map((item, index) => {
            if (index===this.state.active_tab_index){
                return <div onClick={()=>this.handleMenu(index)} className='menu-item active' key={index} type={item.type}><span>{item.name}</span></div>
            }else{
                return <div onClick={()=>this.handleMenu(index)} className='menu-item' key={index} type={item.type}><span>{item.name}</span></div>
            }
            
        });

        return (
            <div className='tab'>
                <div className='tab-name'>
                    <span>{this.props.name}</span>
                </div>
                <div className='menu'>
                    {menu}
                </div>
            </div>
        )
    }
}
