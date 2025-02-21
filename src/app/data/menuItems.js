const menuItems = [
  // SOFT DRINKS
  { name: "Coca Cola", category: "Minuman", price: 17000, image: "" },
  { name: "Sweet Tea (Hot)", category: "Minuman", price: 20000, image: "" },
  { name: "Sweet Tea (Ice)", category: "Minuman", price: 20000, image: "" },
  { name: "Plain Tea (Hot)", category: "Minuman", price: 17000, image: "" },
  { name: "Plain Tea (Ice)", category: "Minuman", price: 17000, image: "" },
  { name: "Lemon Tea", category: "Minuman", price: 23000, image: "" },

  // MINERAL WATER & OTHERS
  { name: "Air Mineral", category: "Minuman", price: 15000, image: "" },
  { name: "Sarabba", category: "Minuman", price: 17000, image: "" },
  { name: "Kopi Susu", category: "Minuman", price: 20000, image: "" },
  { name: "Black Coffee", category: "Minuman", price: 15000, image: "" },

  // MOCKTAILS & JUICES
  { name: "Orange Float", category: "Minuman", price: 36700, image: "" },
  { name: "Lychee Tea", category: "Minuman", price: 23000, image: "" },
  { name: "Red Lime Mocktail", category: "Minuman", price: 30000, image: "" },
  { name: "Lemon Squash", category: "Minuman", price: 28000, image: "" },
  { name: "Orange Squash", category: "Minuman", price: 28000, image: "" },
  { name: "Soda Gembira", category: "Minuman", price: 30000, image: "" },
  { name: "Dragonfruit Juice", category: "Minuman", price: 35000, image: "" },
  { name: "Avocado Juice", category: "Minuman", price: 35000, image: "" },
  { name: "Apple Juice", category: "Minuman", price: 25000, image: "" },
  { name: "Mango Juice", category: "Minuman", price: 39000, image: "" },
  { name: "Orange Juice", category: "Minuman", price: 35000, image: "" },
  { name: "Watermelon Juice", category: "Minuman", price: 33000, image: "" },
  { name: "Melon Juice", category: "Minuman", price: 39000, image: "" },

  // MILKSHAKES
  { name: "Banana Split", category: "Minuman", price: 28000, image: "" },
  { name: "Milkshake Vanilla", category: "Minuman", price: 40500, image: "" },
  { name: "Milky Shake", category: "Minuman", price: 43500, image: "" },
  { name: "Milkshake Strawberry", category: "Minuman", price: 40500, image: "" },
  { name: "Cookies Shake", category: "Minuman", price: 43500, image: "" },
  { name: "Milkshake Chocolate", category: "Minuman", price: 40500, image: "" },

  // TEA & COFFEE
  { name: "Green Day", category: "Minuman", price: 35000, image: "" },
  { name: "Green Tea Latte", category: "Minuman", price: 39000, image: "" },
  { name: "Green Tea Milk", category: "Minuman", price: 36000, image: "" },
  { name: "Thai Milk Tea", category: "Minuman", price: 36000, image: "" },
  { name: "Thai Tea", category: "Minuman", price: 36000, image: "" },
  { name: "Black Avocado", category: "Minuman", price: 40200, image: "" },
  { name: "Ice Chocolate", category: "Minuman", price: 39000, image: "" },
  { name: "Ice Moccacino", category: "Minuman", price: 36000, image: "" },
  { name: "Ice Coffee Latte", category: "Minuman", price: 36000, image: "" },
  { name: "Ice Cappuccino", category: "Minuman", price: 36000, image: "" },

  // STEAK
  { name: "Wagyu Ribeye", category: "Steak", price: 268000, image: "" },
  { name: "Supreme Sirloin (Regular)", category: "Steak", price: 126000, image: "" },
  { name: "Supreme Sirloin (Large)", category: "Steak", price: 149900, image: "" },
  { name: "Wagyu Sirloin", category: "Steak", price: 247000, image: "" },
  { name: "Prime Lamb Chop", category: "Steak", price: 136250, image: "" },
  { name: "Prime Rib Eye", category: "Steak", price: 125000, image: "" },
  { name: "Prime Tenderloin Steak (Regular)", category: "Steak", price: 99500, image: "" },
  { name: "Prime Tenderloin Steak (Large)", category: "Steak", price: 120500, image: "" },
  { name: "Grill Salmon", category: "Steak", price: 138000, image: "" },

  // CHICKEN DISHES
  { name: "Chicken Crispy", category: "Chicken", price: 65000, image: "" },
  { name: "Chicken Crispy Cheese", category: "Chicken", price: 68000, image: "" },
  { name: "Chicken Katsu", category: "Chicken", price: 38000, image: "" },
  { name: "Chicken Cordon Bleu", category: "Chicken", price: 65000, image: "" },
  { name: "Chicken Steak (Regular)", category: "Chicken", price: 68000, image: "" },
  { name: "Chicken Steak (Large)", category: "Chicken", price: 81000, image: "" },

  // PASTA
  { name: "Sweet Italian (Beef)", category: "Pasta", price: 65000, image: "" },
  { name: "Sweet Italian (Chicken)", category: "Pasta", price: 58000, image: "" },
  { name: "Stroganoff (Beef)", category: "Pasta", price: 65000, image: "" },
  { name: "Stroganoff (Chicken)", category: "Pasta", price: 57000, image: "" },
  { name: "Spaghetti Bolognese", category: "Pasta", price: 35000, image: "" },
  { name: "Spaghetti Carbonara", category: "Pasta", price: 55000, image: "" },
  { name: "Spaghetti Salmon Aglio Olio", category: "Pasta", price: 62000, image: "" },

  // FRIED RICE (NASI GORENG)
  { name: "Nasi Goreng Crispy", category: "Nasi Goreng", price: 55000, image: "" },
  { name: "Nasi Goreng Daging", category: "Nasi Goreng", price: 56000, image: "" },
  { name: "Nasi Goreng Merah", category: "Nasi Goreng", price: 50000, image: "" },
  { name: "Nasi Goreng Seafood", category: "Nasi Goreng", price: 55000, image: "" },

  // SIDES
  { name: "Mashed Potato", category: "Sides", price: 38000, image: "" },
  { name: "Potato Wedges", category: "Sides", price: 45000, image: "" },
  { name: "French Fries", category: "Sides", price: 35000, image: "" },
  { name: "Salad Sayur", category: "Sides", price: 27000, image: "" },
  { name: "Salad Buah", category: "Sides", price: 40000, image: "" },
  { name: "Mix Vegetable", category: "Sides", price: 32000, image: "" },
  { name: "Nasi Putih", category: "Sides", price: 10000, image: "" },

  // DESSERTS
  { name: "Pisang Coklat Keju", category: "Desserts", price: 28200, image: "" },
  { name: "Pisang Coklat", category: "Desserts", price: 25200, image: "" },
  { name: "Barongko", category: "Desserts", price: 36000, image: "" },

  // COMBO MEALS (PAKET)
  { name: "Paket 1: Sirloin & Chicken", category: "Paket", price: 157000, image: "" },
  { name: "Paket 2: Prime Sirloin Special & Chicken", category: "Paket", price: 146500, image: "" },
  { name: "Paket 3: 2 Chicken Steak & Nasi", category: "Paket", price: 136000, image: "" },
  { name: "Paket 4: Tenderloin & Sirloin", category: "Paket", price: 188000, image: "" },
  { name: "Paket 5: Tenderloin & Chicken", category: "Paket", price: 168000, image: "" },
];

export default menuItems;