import React, { Component } from 'react'
import MobileTab from './mobileTab';
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

        const width = window.innerWidth;

        if(width<1000){
            return (
                <MobileTab name={this.props.name} menuItems={menu_items} activeTab={this.props.activeTab} handleMenu={this.handleMenu}/>
            );
        }

        return (
            <div className='tab'>
                <div className='tab-name'>
                    <span>{this.props.name}</span>
                </div>
                <div className='menu'>
                    {menu}
                </div>
            </div>
        );
    }
}
