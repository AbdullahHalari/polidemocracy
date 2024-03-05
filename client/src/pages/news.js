import React,{useState,useEffect} from 'react'
import CardUI from "../component/card";
import NavBar from "../component/navbar";

function News() {
 const [news, setNews] = useState([]);

 useEffect(() => {
   const fetchData = async () => {
     
     try {
       const response = await fetch(url);
       if (!response.ok) {
         throw new Error("Network response was not ok");
       }
       const data = await response.json();
       setNews(data.articles);
       console.log(data.articles);
     } catch (error) {
       console.error("Error fetching data:", error);
     }
   };

   fetchData();
 }, []);
  return (
    <div>
      <NavBar />
      {/* <Grid container spacing={2}>
  <Grid item xs={8}>

          <CardUI />
  </Grid>
  </Grid> */}
      <div className="blogs">
        <div></div>
        <div>
          <CardUI />
        </div>
        <div>
          <CardUI />
        </div>
        <div>
          <CardUI />
        </div>
        <div>
          <CardUI />
        </div>
        <div>
          <CardUI />
        </div>
        <div>
          <CardUI />
        </div>
      </div>
    </div>
  );
}

export default News