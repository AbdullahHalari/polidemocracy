import React, { Component } from 'react'
import NavBar from '../component/navbar'


const Answer = () => {
  
    return (
      <div>
        <NavBar />
        <div style={{ margin: 20 }}>Answer</div>
        <div className="ans-search">
          <input
            className="searchBox"
            placeholder="Enter Keyword..."
            type="text"
            id="student-id"
            name="student-id"
            // onChange={(e) => setEmail(e.target.value)}
          />
          <button className='button'>Submit</button>
        </div>
      </div>
    );
  
}

export default Answer