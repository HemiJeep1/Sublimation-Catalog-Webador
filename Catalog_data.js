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
      ["Beach", "Beach01.png"],
      ["Oil", "OIL (9).jpg"],
      ["Corona Extra", "Corona Extra.jpg"],
      ["Two Collies", "2 Collie 17.png"],
      ["Life Is Better at the Beach", "THSP250424268 - Life is better at the Beach 20oz&30oz Skinny Tumbler Wrap PNG Digital Download, Straight.png"],
      ["3D Palm Trees Beach Ocean", "3D Palm Trees Beach Ocean Tumbler Wrap (2)(1).png"],
      ["A&W Root Beer", "AW Root beer.jpg"],
      ["Summer Beach", "JAKH220322003-Beach Tumbler Sublimation Design, Summer tumbler Design, 30oz & 20oz skinny tumbler.png"],
      ["3D Highland Cow Beach", "3D Highland Cow Beach 9 Tumbler Wrap.png"],
      ["Three Havanese", "3 Havanese 16.png"],
      ["Coca-Cola", "Coca Cola.jpg"],
      ["Bernese Mountain Dog", "1 Bernese Mountain 16.png"],
      ["Pringles Original", "Pringles Original.jpg"],
      ["Starbucks", "Starbucks 6.jpg"],
      ["Cozy Beach Landscape", "TSB00035-22 Cozy Beach Landscape 20 Oz.png"],
      ["3D Palm Trees Beach Ocean II", "3D Palm Trees Beach Ocean Tumbler Wrap (2).png"],
      ["3D Seashells Beach Ocean", "3D Seashells Beach Ocean Tumbler Wrap.png"],
      ["9s", "9s.png"],
      ["Guinness", "Guinness.jpg"],
    ],
  },
  {
    category: "11 oz Mugs",
    categoryId: "mugs",
    price: 9.99,
    folder: "11 oz Mugs",
    products: [
      ["Mug Design 9", "9.jpg"],
      ["Mug Design 14", "14.jpg"],
      ["Mug Design 15", "15.jpg"],
      ["Mug Design 12", "12.jpg"],
      ["Mug Design 1", "1(1).jpg"],
      ["Mug Design 10", "10.jpg"],
      ["Mug Design 20", "20.jpg"],
      ["Mug Design 22", "22.jpg"],
      ["Mug Design 23", "23.jpg"],
      ["Mug Design 26", "26.jpg"],
      ["Mug Design 18", "18.jpg"],
      ["Mug Design 7", "7.jpg"],
      ["Mug Design 2", "2.jpg"],
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
      ["Kitchen Came With the House II", "Kitchen came with house 2.png"],
      ["Kitchen Is for Dancing II", "Kitchen for dancing 2.png"],
      ["The Secret to Clean II", "The secret to clean 2.png"],
      ["In This Kitchen We Bake With Love", "In this kitchen we baked with love.png"],
      ["If You Want Breakfast in Bed II", "If you want breakfast in bed 2.png"],
      ["Baking Is the Spice of Life", "Baking is the spice of life.png"],
      ["If You Want Breakfast in Bed III", "If you want breakfast in bed 3.png"],
      ["Cooking Awesome — Smoke Alarm Cheers II", "Cooking awesome smoke alarm cheers 2.png"],
      ["Blessed Are Those Who Help Wash the Dishes", "Blessed are those who help wash the Dishes.png"],
      ["This Kitchen Bakes With Love", "This kitchen bake with love.png"],
      ["Baking Love", "Baking love.png"],
      ["Alexa, Do the Dishes", "Alexa do the Dishes.png"],
      ["Today's Menu", "Todays menu.png"],
      ["Kitchen Is for Dancing", "Kitchen for Dancing.png"],
      ["Coffee Before Talkie", "Coffee Before Talkie.png"],
      ["Hot Mess in the Kitchen", "Hot mess in kitchen.png"],
      ["Wine a Little, Laugh a Lot", "Wine little laugh lot.png"],
      ["Messy Kitchen", "Messy kitchen.png"],
      ["Kitchen Came With the House", "Kitchen came with house.png"],
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
