/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const mongoose = require('mongoose');

const { Schema } = mongoose;
const data = require('./data.js');
const Recipe = require('./models/Recipes.js');

mongoose
  .connect('mongodb://localhost/recipeApp')
  .then(() => {
    console.log('Connected to Mongo!');
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err);
  });

Recipe.create({
  title: 'Creepes',
  level: 'Easy Peasy',
  ingredients: [
    '2 Huevos L',
    '110 g Harina de repostería',
    '240ml Leche',
    '15g Azúcar',
    '2g Sal',
    'Ralladura de limón al gusto',
    'Esencia de vainilla al gusto',
    'Mantequilla o aceite para cocinar',
  ],
  cuisine: 'French cuisine',
  dishType: 'Dessert',
  image: 'https://i.blogs.es/e3d1cb/crepes-salados/1366_2000.jpg',
  duration: 25,
  creator: 'Jofre Moreno',
})
  .then((crepeRecipe) => {
    console.log(crepeRecipe.title);
    return Recipe.insertMany(data);
  })
  .then((recipesList) => {
    recipesList.forEach((singleRecipe) => {
      console.log(`${singleRecipe.title}`);
    });
  })
  .then(() => {
    Recipe.updateOne({ title: 'Rigatoni alla Genovese' }, { duration: 100 });
  })
  .then(() =>{
    console.log('New duration for Rigatoni alla Genovese');
  })
  .then(() => {
    Recipe.deleteOne({ title: 'Carrot cake' });
    mongoose.connection.close();
  })
  .then(() => {
    console.log('Carrot cake deleted');
  })
  .catch((error) => {
    console.log(`Error say hello ${error}`);
    mongoose.connection.close();
  });
