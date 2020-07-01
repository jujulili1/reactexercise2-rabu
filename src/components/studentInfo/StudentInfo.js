import React from 'react'
import "./StudentInfo.css"
function StudentInfo({name, job, words}) {
    return (
        <div>
            <h1>{name}</h1>
            <p>{job}</p>
            <p>{words}</p>
        </div>
    )
}

export default StudentInfo
