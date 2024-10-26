import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYWMyZjM4NmEwYTU3MjcyNzNkOGQzZmYwM2NiMDc5YSIsIm5iZiI6MTcyMzI0NzgzNi4zMTMwNDUsInN1YiI6IjY2YjQzNGE1YzJkMmVmNTFhMjQ1M2ZiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0GZl4QJ8juEU5SzJ90NmA5q2WvXInj4A-NPpeHCWorM",
  },
});

export default instance;
