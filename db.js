const items = require("./data/items");
const brands = require("./data/brands");
const restro = require("./data/restro");
const userinfo = require("./data/userinfo");
const offers = require("./data/offers");
const alert = require("./data/alert");
const babyboys = require("./data/babyboys");
const bath = require("./data/bath");
const beauty = require("./data/beauty");
const homeDecor = require("./data/homeDecor");
const like = require("./data/like");
const men_accessories = require("./data/men_accessories");
const men_clothing = require("./data/men_clothing");
const men_grooming = require("./data/men_grooming");
const post = require("./data/post");
const recent = require("./data/recent");
const women_bags = require("./data/women_bags");
const women = require("./data/women");

module.exports = {
  items,
  brands,
  restro,
  userinfo,
  offers,
  alert,
  babyboys,
  bath,
  beauty,
  homeDecor,
  like,
  men_accessories,
  men_clothing,
  men_grooming,
  post,
  recent,
  women_bags,
  women
}


// const items = require("./data/items");

// module.exports = () => {

//   var tags = items.map((i) => i.tags);
//   tags = [].concat.apply([], tags);
//   tags = [...new Set(tags)];

 

//   var brands = items.map((i) => i.manufacturer);
//   brands = [...new Set(brands)];

//   var itemTypes = items.map((i) => i.itemType);
//   itemTypes = [...new Set(itemTypes)];

//   return {
//     items,
//     tags,
//     brands,
//     itemTypes,
//   };
// };
