const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const data = require("./data.js");
const Recipe = require("./models/Recipes.js");

mongoose
  .connect("mongodb://localhost/recipeApp")
  .then(() => {
    console.log("Connected to Mongo!");
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

Recipe.create({
  title: "Creepes",
  level: "Easy Peasy",
  ingredients: [
    "2 Huevos L",
    "110 g Harina de repostería",
    "240ml Leche",
    "15g Azúcar",
    "2g Sal",
    "Ralladura de limón al gusto",
    "Esencia de vainilla al gusto",
    "Mantequilla o aceite para cocinar"
  ],
  cuisine: "French cuisine",
  dishType: "Dessert",
  image: "https://i.blogs.es/e3d1cb/crepes-salados/1366_2000.jpg",
  duration: 25,
  creator: "Jofre Moreno"
});
