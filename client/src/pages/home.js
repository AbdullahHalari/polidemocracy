import React from "react";
import NavBar from "../component/navbar";

function Home() {
  return (
    <div>
      <NavBar />
      <div className="search">
        <input
          className="searchBox"
          placeholder="Enter Keyword..."
          type="text"
          id="student-id"
          name="student-id"
          // onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="all-ques">
        <h1>All Questions</h1>
        <button className="button">Ask Question</button>
      </div>
      <hr></hr>

      <div className="question">
        <div>
          <p>votes 852</p>
          <p>ans 542</p>
          <p>views 968</p>
        </div>
        <div>
          <h3>what is Politics</h3>
          <p>all the description are here</p>
        </div>

        <div>
          <button className="button">Answer here</button>
        </div>
      </div>
      <hr></hr>
      <div className="question">
        <div>
          <p>votes 852</p>
          <p>ans 542</p>
          <p>views 968</p>
        </div>
        <div>
          <h3>what is Politics</h3>
          <p>all the description are here</p>
        </div>

        <div>
          <button className="button">Answer here</button>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}

export default Home;
