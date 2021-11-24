import React from 'react'
import NavItem from './NavItem'

const Menu = () => {
    return (
        <div className='menu clearfix'>
            <nav className='navbar'>
                <NavItem name="Summary" url='#' className=''/>
                <NavItem name='Chart' url='#' className='active'/>
                <NavItem name='Statistics' url='#' className=''/>
                <NavItem name='Analysis' url='#' className=''/>
                <NavItem name='Settings' url='#' className=''/>
            </nav>
            
        </div>
    )
}

export default Menu
