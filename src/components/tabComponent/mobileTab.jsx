import React, { Component } from 'react'

export default class MobileTab extends Component {

    constructor(props){
        super(props);
        this.state = {
            open: false
        };
        this.menuClass = 'menu menu-mobile';
    }

    toggleMenu = () => {
        this.setState({
            open: !this.state.open
        });
    }

    handleMenu = (type) => {
        this.setState({
            open: false
       });
       this.props.handleMenu(type);
    }

    render() {

        const menuItems = this.props.menuItems;
        const menu = menuItems.map((item, index) => {
            if (item.type===this.props.activeTab){
                return (
                    <div onClick={()=>this.toggleMenu()} className='menu-item menu-item-mobile active' key={index} type={item.type}>
                        <span>{item.name}<i className="bi bi-caret-down"></i></span>
                    </div>
                    );
            }else{
                return (
                    <div onClick={()=>this.handleMenu(item.type)} className='menu-item menu-item-mobile' key={index} type={item.type}>
                        <span>{item.name}</span>
                    </div>
                    );
            }
            
        });

        let menuClass = 'menu menu-mobile';
        if (this.state.open){
            menuClass = 'menu menu-mobile open'
        }


        return (
            <div className='tab tab-mobile'>
                <div className='tab-name'>
                    <span>{this.props.name}</span>
                </div>
                <div className='menuContainer'>
                    <div className={menuClass}>
                        {menu}
                    </div>
                </div>
            </div>
        );
    }
}
