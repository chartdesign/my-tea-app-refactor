export function filterItems(items, query) {
  query = query.toLowerCase();
  return items.filter((item) =>
    item.name.split(" ").some((word) => word.toLowerCase().startsWith(query))
  );
}

export function filterCategory(items, selectedOption) {
  if (selectedOption === "") {
    return items;
  }
  return items.filter((item) => item.category === selectedOption);
}

export const products = [
  {
    id: 1,
    name: "Velvet Rose Chamomile Herbal Tea",
    description:
      "Delicate white tea infused with luscious blueberries for a soothing, fruity escape.",
    price: 6.99,
    image:
      "https://images.pexels.com/photos/5501118/pexels-photo-5501118.jpeg?auto=compress&cs=tinysrgb&w=800",
    inStock: 0,
    reviews: 191,
    ratings: 4,
    category: "Herbal Tea",
  },
  {
    id: 2,
    name: "Midsummer Night's Dream Green Tea",
    description:
      "A calming blend of mint and lavender, perfect for moments of reflection and relaxation.",
    price: 10.99,
    image:
      "https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=800",
    inStock: 0,
    reviews: 172,
    ratings: 2,
    category: "Chai Tea",
  },
  {
    id: 3,
    name: "Mango Tango Oolong Fusion",
    description:
      "Green tea kissed by the vibrant flavors of citrus, creating a refreshing and invigorating brew.",
    price: 6.99,
    image:
      "https://images.pexels.com/photos/227908/pexels-photo-227908.jpeg?auto=compress&cs=tinysrgb&w=800",
    inStock: 6,
    reviews: 24,
    ratings: 2,
    category: "Green Tea",
  },
  {
    id: 4,
    name: "Golden Sunrise Rooibos Infusion",
    description:
      "A harmonious mix of wild berries and hibiscus, a burst of flavor in every sip.",
    price: 14.99,
    image:
      "https://images.pexels.com/photos/5501118/pexels-photo-5501118.jpeg?auto=compress&cs=tinysrgb&w=800",
    inStock: 0,
    reviews: 287,
    ratings: 1,
    category: "Decaf",
  },
  {
    id: 5,
    name: "Zen Garden Matcha Green Tea",
    description:
      "Indulge in the rich blend of chocolate and chai spices, a decadent treat for your taste buds.",
    price: 10.99,
    image:
      "https://images.pexels.com/photos/5501118/pexels-photo-5501118.jpeg?auto=compress&cs=tinysrgb&w=800",
    inStock: 3,
    reviews: 71,
    ratings: 3,
    category: "Black Tea",
  },
  {
    id: 6,
    name: "Lavender Eucalyptus Relaxation Blend",
    description:
      "Unwind with the soothing combination of lemon and ginger, a perfect way to de-stress.",
    price: 7.99,
    image:
      "https://images.pexels.com/photos/3368288/pexels-photo-3368288.jpeg?auto=compress&cs=tinysrgb&w=800",
    inStock: 3,
    reviews: 132,
    ratings: 3,
    category: "Black Tea",
  },
  {
    id: 7,
    name: "Spiced Apple Pie Chai Tea",
    description:
      "Elegantly fragrant jasmine pearls, a floral symphony in a cup.",
    price: 17.99,
    image:
      "https://images.pexels.com/photos/39347/tea-farmhouse-hand-fresh-39347.jpeg?auto=compress&cs=tinysrgb&w=800",
    inStock: 1,
    reviews: 207,
    ratings: 5,
    category: "Herbal Tea",
  },
  {
    id: 8,
    name: "Himalayan Honey Darjeeling Black Tea",
    description:
      "Sencha green tea with notes of the emerald forest, a taste of nature's tranquility.",
    price: 10.99,
    image:
      "https://images.pexels.com/photos/39347/tea-farmhouse-hand-fresh-39347.jpeg?auto=compress&cs=tinysrgb&w=800",
    inStock: 4,
    reviews: 264,
    ratings: 5,
    category: "Herbal Tea",
  },
  {
    id: 9,
    name: "Tropical Paradise Coconut Oolong",
    description:
      "A delightful black tea with the sweet essence of almond and a hint of amaretto sophistication.",
    price: 7.99,
    image:
      "https://images.pexels.com/photos/8951989/pexels-photo-8951989.jpeg?auto=compress&cs=tinysrgb&w=800",
    inStock: 0,
    reviews: 232,
    ratings: 1,
    category: "Black Tea",
  },
  {
    id: 10,
    name: "Autumn Harvest Pumpkin Spice Rooibos",
    description:
      "Experience the warmth of a campfire with this s'mores-inspired rooibos blend, a cozy delight.",
    price: 8.99,
    image:
      "https://images.pexels.com/photos/8951989/pexels-photo-8951989.jpeg?auto=compress&cs=tinysrgb&w=800",
    inStock: 5,
    reviews: 131,
    ratings: 4,
    category: "Chai Tea",
  },
  {
    id: 11,
    name: "Blueberry Bliss White Tea",
    description:
      "Delicate white tea infused with luscious blueberries for a soothing, fruity escape.",
    price: 6.99,
    image:
      "https://images.pexels.com/photos/5501118/pexels-photo-5501118.jpeg?auto=compress&cs=tinysrgb&w=800",
    inStock: 5,
    reviews: 142,
    ratings: 1,
    category: "Decaf",
  },
  {
    id: 12,
    name: "Mystic Mint Lavender Infusion",
    description:
      "A calming blend of mint and lavender, perfect for moments of reflection and relaxation.",
    price: 6.99,
    image:
      "https://images.pexels.com/photos/227908/pexels-photo-227908.jpeg?auto=compress&cs=tinysrgb&w=800",
    inStock: 6,
    reviews: 240,
    ratings: 5,
    category: "Green Tea",
  },
  {
    id: 13,
    name: "Citrus Serenade Green Tea",
    description:
      "Green tea kissed by the vibrant flavors of citrus, creating a refreshing and invigorating brew.",
    price: 9.99,
    image:
      "https://images.pexels.com/photos/8951989/pexels-photo-8951989.jpeg?auto=compress&cs=tinysrgb&w=800",
    inStock: 4,
    reviews: 13,
    ratings: 1,
    category: "Green Tea",
  },
  {
    id: 14,
    name: "Wild Berry Hibiscus Delight",
    description:
      "A harmonious mix of wild berries and hibiscus, a burst of flavor in every sip.",
    price: 17.99,
    image:
      "https://images.pexels.com/photos/2582652/pexels-photo-2582652.jpeg?auto=compress&cs=tinysrgb&w=800",
    inStock: 2,
    reviews: 9,
    ratings: 3,
    category: "Chai Tea",
  },
  {
    id: 15,
    name: "Chocolate Chai Indulgence",
    description:
      "Indulge in the rich blend of chocolate and chai spices, a decadent treat for your taste buds.",
    price: 17.99,
    image:
      "https://images.pexels.com/photos/3368288/pexels-photo-3368288.jpeg?auto=compress&cs=tinysrgb&w=800",
    inStock: 3,
    reviews: 151,
    ratings: 5,
    category: "Black Tea",
  },
  {
    id: 16,
    name: "Tranquil Lemon Ginger Herbal Tea",
    description:
      "Unwind with the soothing combination of lemon and ginger, a perfect way to de-stress.",
    price: 17.99,
    image:
      "https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=800",
    inStock: 6,
    reviews: 295,
    ratings: 5,
    category: "Black Tea",
  },
  {
    id: 17,
    name: "Jasmine Pearl Elegance",
    description:
      "Elegantly fragrant jasmine pearls, a floral symphony in a cup.",
    price: 17.99,
    image:
      "https://images.pexels.com/photos/6087518/pexels-photo-6087518.jpeg?auto=compress&cs=tinysrgb&w=800",
    inStock: 2,
    reviews: 216,
    ratings: 4,
    category: "Black Tea",
  },
  {
    id: 18,
    name: "Emerald Forest Sencha Blend",
    description:
      "Sencha green tea with notes of the emerald forest, a taste of nature's tranquility.",
    price: 9.99,
    image:
      "https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=800",
    inStock: 5,
    reviews: 283,
    ratings: 2,
    category: "Decaf",
  },
  {
    id: 19,
    name: "Sweet Almond Amaretto Black Tea",
    description:
      "A delightful black tea with the sweet essence of almond and a hint of amaretto sophistication.",
    price: 8.99,
    image:
      "https://images.pexels.com/photos/5501118/pexels-photo-5501118.jpeg?auto=compress&cs=tinysrgb&w=800",
    inStock: 1,
    reviews: 116,
    ratings: 1,
    category: "Chai Tea",
  },
  {
    id: 20,
    name: "Cozy Campfire S'mores Rooibos",
    description:
      "Experience the warmth of a campfire with this s'mores-inspired rooibos blend, a cozy delight.",
    price: 7.99,
    image:
      "https://images.pexels.com/photos/2582652/pexels-photo-2582652.jpeg?auto=compress&cs=tinysrgb&w=800",
    inStock: 6,
    reviews: 82,
    ratings: 2,
    category: "Green Tea",
  },
  {
    id: 21,
    name: "Velvet Rose Chamomile Herbal Tea",
    description:
      "Delicate white tea infused with luscious blueberries for a soothing, fruity escape.",
    price: 6.99,
    image:
      "https://images.pexels.com/photos/1624554/pexels-photo-1624554.jpeg?auto=compress&cs=tinysrgb&w=800",
    inStock: 6,
    reviews: 8,
    ratings: 5,
    category: "Black Tea",
  },
  {
    id: 22,
    name: "Midsummer Night's Dream Green Tea",
    description:
      "A calming blend of mint and lavender, perfect for moments of reflection and relaxation.",
    price: 14.99,
    image:
      "https://images.pexels.com/photos/227908/pexels-photo-227908.jpeg?auto=compress&cs=tinysrgb&w=800",
    inStock: 6,
    reviews: 231,
    ratings: 1,
    category: "Black Tea",
  },
  {
    id: 23,
    name: "Mango Tango Oolong Fusion",
    description:
      "Green tea kissed by the vibrant flavors of citrus, creating a refreshing and invigorating brew.",
    price: 17.99,
    image:
      "https://images.pexels.com/photos/1624554/pexels-photo-1624554.jpeg?auto=compress&cs=tinysrgb&w=800",
    inStock: 0,
    reviews: 164,
    ratings: 3,
    category: "Green Tea",
  },
  {
    id: 24,
    name: "Golden Sunrise Rooibos Infusion",
    description:
      "A harmonious mix of wild berries and hibiscus, a burst of flavor in every sip.",
    price: 7.99,
    image:
      "https://images.pexels.com/photos/227908/pexels-photo-227908.jpeg?auto=compress&cs=tinysrgb&w=800",
    inStock: 2,
    reviews: 151,
    ratings: 4,
    category: "Chai Tea",
  },
];
