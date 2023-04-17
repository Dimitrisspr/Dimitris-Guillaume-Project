import React, { useState } from "react";
import { ReactDOM } from "react";
import Logout from "./Logout";

const foodDrinkMap = {
  Pizza: "Beer",
  Burger: "Milkshake",
  Sushi: "Sake",
  Taco: "Margarita",
  Mousakas: "Ouzo",
  Croissant: "Hot Chocolate",
  Souvlaki: "Coke",
  Falafel: "Ariani",
  Bougatsa: "chocolate-milk",
  GreekSalad: "White wine",
};

function DropdownMenu() {
  const [selectedFood, setSelectedFood] = useState("");
  const token = localStorage.getItem("foodToken");
  if (token)
    try {
      {
        const handleFoodSelect = (event) => {
          setSelectedFood(event.target.value);
        };

        return (
          <div>
            <select value={selectedFood} onChange={handleFoodSelect}>
              <option value="">Select a food</option>
              <option value="Pizza">Pizza</option>
              <option value="Burger">Burger</option>
              <option value="Sushi">Sushi</option>
              <option value="Taco">Taco</option>
              <option value="Mousakas">Mousakas</option>
              <option value="Croissant">Croissant</option>
              <option value="Souvlaki">Souvlaki</option>
              <option value="Falafel">Falafel</option>
              <option value="Bougatsa">Bougatsa</option>
              <option value="GreekSalad">GreekSalad</option>
            </select>
            {selectedFood && (
              <p>Suggested drink: {foodDrinkMap[selectedFood]}</p>
            )}
          </div>
        );
      }
    } catch (error) {
      console.log(error);
    }
}

export default DropdownMenu;
