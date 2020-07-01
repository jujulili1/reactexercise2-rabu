import React from 'react'
import './Avatar.css'
function Avatar({image}) {
    return (
        <div className="avatar">
            <img src={image} alt="avatar" />
        </div>
    )
}

export default Avatar
