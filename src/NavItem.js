import React from 'react'

const NavItem = ({name,url,className}) => {
    return (
       <a  className={className}  href={url}>
           <h2>{name}</h2>
       </a>
    )
}

export default NavItem
