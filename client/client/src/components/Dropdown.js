/* eslint-disable no-lone-blocks */
import React, { useState, useEffect } from "react";
// import { ReactDOM } from "react";
// import Logout from "./Logout";
import { LoadImage, SearchImage } from "./Api";
import Image from "./Image";
const sthWith = {
  
  sth: {
  desert: "garlic bread",
  imageURL:
    "https://images.unsplash.com/photo-1553787499-6f9133860278?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWlsa3NoYWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  
}

};
const foodDrinkMap = {
  Pizza: {
    drink: "beer",
    imageURL:
      "https://images.unsplash.com/photo-1600788886242-5c96aabe3757?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    desert: "garlic bread",
  },
  Burger: {
    drink: "Milkshake",
    imageURL:
      "https://images.unsplash.com/photo-1553787499-6f9133860278?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWlsa3NoYWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  Sushi: {
    drink: "Sake",
    imageURL:
      "https://plus.unsplash.com/premium_photo-1668988895616-95f0ed8adba8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2FrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  Taco: {
    drink: "Margarita",
    imageURL:
      "https://plus.unsplash.com/premium_photo-1678305073412-72175855b1dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFyZ2FyaXRhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  Mousakas: {
    drink: "Ouzo",
    imageURL:
      "https://images.unsplash.com/photo-1515594848784-7a3f98e75f86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b3V6b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  Croissant: {
    drink: "Hot Chocolate",
    imageURL:
      "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwY2hvY29sYXRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  Souvlaki: {
    drink: "Coke",
    imageURL:
      "https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29rZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  Falafel: {
    drink: "Aryan",
    imageURL:
      "https://upload.wikimedia.org/wikipedia/commons/8/8e/Fresh_ayran.jpg",
  },
  Bougatsa: {
    drink: "Chocolate Milk",
    imageURL:
      "https://plus.unsplash.com/premium_photo-1664647903752-08d1249e7d40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hvY29sYXRlJTIwbWlsa3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  GreekSalad: {
    drink: "White Wine",
    imageURL:
      "https://images.unsplash.com/photo-1498429152472-9a433d9ddf3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjB3aW5lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
};









function DropdownMenu() {
  const [query, setQuery] = useState();
  const [searchQ, setSearch] = useState();
  const [username, setUsername] = useState("");
  const data = LoadImage();
  const [selectedFood, setSelectedFood] = useState("");
  const [selectedFood1, setSelectedFood1] = useState("");
  const token = localStorage.getItem("foodToken");
  const search = () => {
setSearch(query)
  }
  const searchData = SearchImage(searchQ)


  if (token) {
    try {
      // Fixed missing opening curly brace
      let handleFoodSelect = (event) => {
        setSelectedFood(event.target.value);
      };
      let handleFoodSelect1 = (event) => {
        setSelectedFood1(event.target.value);
      };

      return (
        <div>
          <h1>Look and select from all the given selection of food and desert menu</h1>
          <select
            value={selectedFood}
            onChange={handleFoodSelect}
            className="dropdown"
          >
            <option value="">Select a food</option>
            <option value="Pizza">Pizza</option>
          </select>

          {selectedFood && (
            <div className="options">
              <h1>Suggested drink: {foodDrinkMap[selectedFood].drink}</h1>

              <img
                src={foodDrinkMap[selectedFood].imageURL}
                alt={selectedFood}
              />
            </div>
          )}

          <select
            value={selectedFood1}
            onChange={handleFoodSelect1}
            className="dropdown"
          >
            <option value="">select sth</option>
            <option value="sth">sth</option>
          </select>

          {selectedFood1 && (
            <div className="options">
              <h1>
                something to take it with: {sthWith[selectedFood1].desert}
              </h1>

              <img
                src={sthWith[selectedFood1].imageURL}
                alt={selectedFood1}
              />
            </div>
          )}



          <div>
            <input 
            type="text" 
            onChange={(e) => setQuery(e.target.value) } />
            <button onClick={search}>Search</button>
          </div>
          <div className="card-container">
  {searchQ
    ? searchData.map((img, key) => (
        <div className="card" key={key}>
          <Image src={img.urls.thumb} />
        </div>
      ))
    : data.map((img, key) => (
        <div className="card" key={key}>
          <Image src={img.urls.thumb} />
        </div>
      ))}
</div>


  






        </div>
        
        
        
          
            
     




      );
    } catch (error) {
      console.log(error);
    }
  }

  return null;
}



  
export default DropdownMenu;
