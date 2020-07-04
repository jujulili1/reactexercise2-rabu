import React from 'react'

import "./Avatar.css"

import image from "../../assets/1.jpg"

function Avatar() {
    return (
       <content>
           <div className="avatar">
<img src={image} alt="avatar" />
           </div>
           <div className="info">
<h1>TRI YULIANTO</h1>
<p>BOOTCAMP STUDENT</p>
<p>Coding membuat saya belajar bagaimana berpikir</p>
           </div>
       </content>
    )
}

export default Avatar

