import React, { Component } from 'react'
import './tab.css'

export default class Tab extends Component {

    handleMenu = (type) => {
        this.props.handleTab(type);
    }

    render() {

        const menu_items = this.props.menu_items;
        const menu = menu_items.map((item, index) => {
            if (item.type===this.props.activeTab){
                return <div onClick={()=>this.handleMenu(item.type)} className='menu-item active' key={index} type={item.type}><span>{item.name}</span></div>
            }else{
                return <div onClick={()=>this.handleMenu(item.type)} className='menu-item' key={index} type={item.type}><span>{item.name}</span></div>
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
