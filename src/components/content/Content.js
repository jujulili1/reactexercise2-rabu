import React from 'react'
import "./Content.css"
import image from "../../assets/1.jpg"
function Content(props) {

    return (
        <div className="card">

        <div className="content">
            <div className="video">
          <iframe
            width="130"
            height="70"
            src={props.video}
            frameborder="0"
            title="video"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="title">
          <p>{props.title}</p>
          </div>
          <div className="desc">
          <p>{props.desc}</p>
        </div>
        </div>
        </div>
    )
}

export default Content
