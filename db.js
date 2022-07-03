const items = require("./data/items");
const brands = require("./data/brands");
const restro = require("./data/restro");
const userinfo = require("./data/userinfo");
const offers = require("./data/offers");

module.exports = {
  items,
  brands,
  restro,
  userinfo,
  offers
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
