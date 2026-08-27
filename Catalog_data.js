/**
 * Product catalog generated from the supplied Products directory.
 *
 * Image paths are relative to this file. Keep the Products directory beside
 * Catalog_data.js, or update IMAGE_ROOT to match your public asset location.
 */

export const catalogCategories = Object.freeze([
  { id: "tumblers", name: "20 oz Tumblers" },
  { id: "mugs", name: "11 oz Mugs" },
  { id: "tea-towels", name: "Tea Towels" },
]);

const IMAGE_ROOT = "./Products";

const productGroups = [
  {
    category: "20 oz Tumblers",
    categoryId: "tumblers",
    price: 14.99,
    folder: "20 oz Tumbler",
    products: [
      ["Beach", "Beach.png"],
      ["Castrol GTX OIL", "Castrol GTX OIL.jpg"],
      ["Corona Extra", "Corona Extra.jpg"],
      ["Collies", "Collie.png"],
      ["Life Is Better at the Beach 2", "Life is better at the Beach 2.png"],
      ["3D Palm Trees Beach Ocean", "3D Palm Trees Beach Ocean.png"],
      ["A&W Root Beer", "AW Root beer.jpg"],
      ["Life is better at the beach", "Life is better at the beach.png"],
      ["3D Highland Cow Beach", "3D Highland Cow Beach.png"],
      ["Havanese", "Havanese.png"],
      ["Coca-Cola", "Coca Cola.jpg"],
      ["Bernese Mountain Dog", "Bernese Mountain.png"],
      ["Pringles Original", "Pringles Original.jpg"],
      ["Starbucks", "Starbucks.jpg"],
      ["Cozy Beach Landscape", "Cozy Beach Landscape.png"],
      ["3D Palm Trees Beach Ocean 2", "3D Palm Trees Beach Ocean 2.png"],
      ["3D Seashells Beach Ocean", "3D Seashells Beach Ocean.png"],
      ["Blue Flowers", "Blue flowers.png"],
      ["Guinness", "Guinness.jpg"],
    ],
  },
  {
    category: "11 oz Mugs",
    categoryId: "mugs",
    price: 9.99,
    folder: "11 oz Mugs",
    products: [
      ["Aging", "Aging.jpg"],
      ["Coffee don't do miracles", "Coffee don't do miracles.jpg"],
      ["Day drinking", "Day drinking.jpg"],
      ["Knit not strangle people", "Knit not strangle people.jpg"],
      ["Many tabs open", "Many tabs open.jpg"],
      ["Mind own business", "Mind own buisiness.jpg"],
      ["Not bossy", "Not bossy.jpg"],
      ["Not lazy", "Not lazy.jpg"],
      ["Retired opinions", "Retired opinions.jpg"],
      ["Said to myself", "Said to myself.jpg"],
      ["Too old", "Too old.jpg"],
      ["Wise Cracks", "Wise Cracks.jpg"],
      ["Workday circus", "Workday circus.jpg"],
    ],
  },
  {
    category: "Coasters",
    categoryId: "Coasters",
    price: 4.99,
    folder: "Coasters",
    products: [
      ["Bear", "Bear.PNG"],
      ["Cowboy Horse Fire", "Cowboy Horse Fire.png"],
      ["Big Horn Sheep", "Big Horn Sheep.PNG"],
      ["Moose", "Moose.PNG"],
    ],
  },
  {
    category: "Tea Towels",
    categoryId: "tea-towels",
    price: 7.99,
    folder: "Tea Towels",
    products: [
      ["The Secret to a Clean Kitchen", "The secret to a clean.png"],
      ["Kitchen Was Clean Yesterday", "Kitchen was clean yesterday.png"],
      ["Cooking Awesome — Smoke Alarm Cheers", "Cooking awesome smoke alarm cheers.png"],
      ["Wine O'Clock", "Wine O'clock.png"],
      ["If You Want Breakfast in Bed", "If you want breakfast in bed.png"],
      ["Cooking Awesome — Smoke Detector", "Cooking awesome smoke detector.png"],
      ["Kitchen Came With the House 2", "Kitchen came with house 2.png"],
      ["Kitchen Is for Dancing II", "Kitchen for dancing 2.png"],
      ["The Secret to Clean 2", "The secret to clean 2.png"],
      ["In This Kitchen We Bake With Love", "In this kitchen we baked with love.png"],
      ["If You Want Breakfast in Bed 2", "If you want breakfast in bed 2.png"],
      ["Baking Is the Spice of Life", "Baking is the spice of life.png"],
      ["If You Want Breakfast in Bed 3", "If you want breakfast in bed 3.png"],
      ["Cooking Awesome — Smoke Alarm Cheers 2", "Cooking awesome smoke alarm cheers 2.png"],
      ["Blessed Are Those Who Help Wash the Dishes", "Blessed are those who help wash the Dishes.png"],
      ["This Kitchen Bakes With Love", "This kitchen bake with love.png"],
      ["Baking Love", "Baking love.png"],
      ["Alexa, Do the Dishes", "Alexa do the Dishes.png"],
      ["Today's Menu", "Todays menu.png"],
      ["Kitchen Is for Dancing", "Kitchen for Dancing.png"],
      ["Coffee Before Talkie", "Coffee Before Talkie.png"],
      ["Hot Mess in the Kitchen", "Hot mess in the kitchen.png"],
      ["Wine a Little, Laugh a Lot", "Wine little laugh lot.png"],
      ["Messy Kitchen", "Messy kitchen.png"],
      ["Kitchen Came With the House", "Kitchen came with house.png"],
    ],
  },
  {
    category: "Mouse Pads",
    categoryId: "Mouse Pads",
    price: 4.99,
    folder: "Mouse Pads",
    products: [
      ["Badlands", "Badlands.png"],
      ["Bear", "Bear.jpg"],
      ["Big Horn Sheep", "Big Horn Sheep.png"],
      ["Big Horn Sheep", "Big Horn Sheep.png"],
      ["Moose", "Moose.png"],
    ],
  },
  {
    category: "Fridge Magnets",
    categoryId: "Fridge Magnets",
    price: 1.99,
    folder: "Fridge Magnets",
    products: [
      ["Banff Tram", "Banff Tram.png"],
      ["Bear Family", "Bear Family.png"],
      ["Beaver", "Beaver.png"],
      ["Big Horn Sheep", "Big Horn Sheep.png"],
      ["Calgary City", "Calgary City.png"],
      ["Cowboy Horse Fire", "Cowboy Horse Fire.png"],
      ["Cowboy on Horse", "Cowboy on Horse.png"],
    ],
  },
];

const slugify = (value) =>
  value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export const catalogData = Object.freeze(
  productGroups.flatMap(({ category, categoryId, price, folder, products }) =>
    products.map(([name, fileName], index) =>
      Object.freeze({
        id: `${categoryId}-${String(index + 1).padStart(2, "0")}-${slugify(name)}`,
        name,
        category,
        categoryId,
        price,
        image: `${IMAGE_ROOT}/${folder}/${fileName}`,
        alt: `${name} ${category.toLowerCase()} design`,
      }),
    ),
  ),
);

export const getProductsByCategory = (categoryId) =>
  catalogData.filter((product) => product.categoryId === categoryId);

export const getProductById = (id) =>
  catalogData.find((product) => product.id === id);

export default catalogData;
