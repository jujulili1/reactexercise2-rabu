import React, {useState} from 'react'
import "./LandingPage.css"

import Avatar from "../components/avatar/Avatar"
import Content from "../components/content/Content"
function LandingPage() {
    const [cardContent] = useState([
        {
          video: "https://www.youtube.com/embed/UB1O30fR-EE",
          title: "HTML Crash Course",
          desc: "In this crash course I will cram as much about HTML that I can.",
        },
        {
          video: "https://www.youtube.com/embed/1Rs2ND1ryYc",
          title: "CSS Tutorial - Zero to Hero",
          desc:
            "Learn CSS in this full course for beginners. CSS, or Cascading Style Sheet, is responsible for the styling and looks of a website.",
        },
      ]);
      let cards = cardContent.map((a) => (
        <Content title={a.title} video={a.video} desc={a.desc} />
      ));
    return (
        <div>
            <div className="profile">
      <Avatar />
      <h1>My Courses</h1>
      <div className="block-card">{cards}</div>
    </div> 
        </div>
    )
}

export default LandingPage
