// make a function that generates an array of JSON objects
const categories = [
  "Green Tea",
  "Black Tea",
  "Herbal Tea",
  "Chai Tea",
  "Decaf",
];

const teaBlendNames = [
  "Velvet Rose Chamomile Herbal Tea",
  "Midsummer Night's Dream Green Tea",
  "Mango Tango Oolong Fusion",
  "Golden Sunrise Rooibos Infusion",
  "Zen Garden Matcha Green Tea",
  "Lavender Eucalyptus Relaxation Blend",
  "Spiced Apple Pie Chai Tea",
  "Himalayan Honey Darjeeling Black Tea",
  "Tropical Paradise Coconut Oolong",
  "Autumn Harvest Pumpkin Spice Rooibos",
  "Blueberry Bliss White Tea",
  "Mystic Mint Lavender Infusion",
  "Citrus Serenade Green Tea",
  "Wild Berry Hibiscus Delight",
  "Chocolate Chai Indulgence",
  "Tranquil Lemon Ginger Herbal Tea",
  "Jasmine Pearl Elegance",
  "Emerald Forest Sencha Blend",
  "Sweet Almond Amaretto Black Tea",
  "Cozy Campfire S'mores Rooibos",
];
const teaBlendDescriptions = [
  "Delicate white tea infused with luscious blueberries for a soothing, fruity escape.",
  "A calming blend of mint and lavender, perfect for moments of reflection and relaxation.",
  "Green tea kissed by the vibrant flavors of citrus, creating a refreshing and invigorating brew.",
  "A harmonious mix of wild berries and hibiscus, a burst of flavor in every sip.",
  "Indulge in the rich blend of chocolate and chai spices, a decadent treat for your taste buds.",
  "Unwind with the soothing combination of lemon and ginger, a perfect way to de-stress.",
  "Elegantly fragrant jasmine pearls, a floral symphony in a cup.",
  "Sencha green tea with notes of the emerald forest, a taste of nature's tranquility.",
  "A delightful black tea with the sweet essence of almond and a hint of amaretto sophistication.",
  "Experience the warmth of a campfire with this s'mores-inspired rooibos blend, a cozy delight.",
];
const prices = [6.99, 7.99, 8.99, 9.99, 10.99, 14.99, 17.99];
const images = [
  "https://images.pexels.com/photos/227908/pexels-photo-227908.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/39347/tea-farmhouse-hand-fresh-39347.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/2582652/pexels-photo-2582652.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/3368288/pexels-photo-3368288.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/6087518/pexels-photo-6087518.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/5501118/pexels-photo-5501118.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/1624554/pexels-photo-1624554.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/8951989/pexels-photo-8951989.jpeg?auto=compress&cs=tinysrgb&w=800",
];

const ratings = [1, 2, 3, 4, 5];

function getRandomStringFromArray(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function generateArray(numberOfObjects) {
  let products = [...Array(numberOfObjects)].map((_, index) => ({
    id: index + 1,
    name: teaBlendNames[index % teaBlendNames.length], // Cycle through names
    description: teaBlendDescriptions[index % teaBlendDescriptions.length],
    price: getRandomStringFromArray(prices),
    image: getRandomStringFromArray(images),
    inStock: Math.floor(Math.random() * 7),
    reviews: Math.floor(Math.random() * 300),
    ratings: Math.floor(Math.random() * ratings.length + 1),
    category: getRandomStringFromArray(categories),
  }));
  return products;
}

console.log(generateArray(24));
