const API_URl = process.env.NODE_ENV === "development"
? "http://localhost:8000"
: "https://dimitris-guillaume.onrender.com";

export default API_URL;