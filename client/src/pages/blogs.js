import { Grid } from '@mui/material';
import React,{useState,useEffect} from 'react'
import CardUI from '../component/card'
import NavBar from '../component/navbar'

function Blogs() {
   const [blogs, setBlogs] = useState([]);

  //  const fetchBlogs = async () => {
  //    const query = "technology"; // Customize your search query
  //    const language = "en"; // Specify language (e.g., 'en' for English)
  //    const country = "global"; // Specify country (e.g., 'global' for worldwide)
  //    const fromDate = "2023-12-28"; // Specify start date
  //    const toDate = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format
  //    const limit = 10; // Specify the maximum number of results

  //    const url = `${apiUrl}?apikey=${apiKey}&q=${query}&language=${language}&country=${country}&from=${fromDate}&to=${toDate}&limit=${limit}`;

  //    try {
  //      const response = await fetch(url);
  //      if (!response.ok) {
  //        throw new Error(`HTTP error! Status: ${response.status}`);
  //      }
  //      // const data = await response.json();
  //      // console.log("Blog posts:", data);
  //      // Process the retrieved blog posts
  //    } catch (error) {
  //      console.error("Error fetching blog posts:", error);
  //    }
  //  };
  //  useEffect(() => {
  //    fetchBlogs();
  //  }, []);
  return (
    <div>
      <NavBar />
      {/* <Grid container spacing={2}>
  <Grid item xs={8}>

          <CardUI />
  </Grid>
  </Grid> */}
      <div className="blogs">
        <div>
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
        <div>
          <CardUI />
        </div>
      </div>
    </div>
  );
}

export default Blogs