import React,{useState} from "react";
import NavBar from "../component/navbar";
import QuestionCard from "../component/questionCard"
import Popup from "../component/popup";
function Home() {
   const [isOpen, setIsOpen] = useState(false);

   const togglePopup = () => {
     setIsOpen(!isOpen);
   };
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
        <div>
          <h1>All Questions</h1>
        </div>
        <div>
          <button className="button" onClick={togglePopup}>
            Ask Question
          </button>
        </div>
      </div>
      <hr></hr>
      <div className="questions">
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
      </div>
      {/* <div className="question">
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
      <hr></hr> */}
      {/* <div>
        <input
          type="button"
          value="Click to Open Popup"
          onClick={togglePopup}
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p> */}
      {isOpen && (
        <Popup
          content={
            <>
              <h3>Ask Question:</h3>
              <label className="label">Title:</label>
              <br />
              <input
                className="text-input"
                placeholder="Enter Title Here..."
                type="text"
                name="title"
                // onChange={(e) => setEmail(e.target.value)}
              />
              <label className="label">Subject:</label>
              <br />
              <input
                className="text-input"
                placeholder="Enter Subject Here..."
                type="text"
                name="title"
                // onChange={(e) => setEmail(e.target.value)}
              />
              <label className="label">Description:</label>
              <br />
              <input
                className="text-input"
                placeholder="Enter Description Here..."
                type="text"
                name="title"
                // onChange={(e) => setEmail(e.target.value)}
              />
              <br/>
              <br/>
              <button className="button">Post Question</button>
            </>
          }
          handleClose={togglePopup}
        />
      )}
      {/* </div> */}
    </div>
  );
}

export default Home;
