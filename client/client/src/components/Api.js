import { useState, useEffect } from "react";
import axios from "axios";

const ACCESS_KEY = "LXieObpEYsv7hvPvGTxjAwWe3g3DvtZFGGj4JuyyYqE";

function LoadImage() {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios 
      .get(`https://api.unsplash.com/photos?client_id=${ACCESS_KEY}`)
      .then((data)=> {
        setState(data.data)
      })
  }, [])
  return state;  
}

function SearchImage(query) {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios 
      .get(`https://api.unsplash.com/search/photos?query=${query}&client_id=${ACCESS_KEY}`)
      .then((data)=> {
        setState(data.data.results)
      })
  }, [query])
  return state;  
}

export { LoadImage, SearchImage };
