export const categories = [
    {
        category: "Fresh Fruits",
        domain: "fruits",
        imgUrl: "/images/cat-1.png"
    },
    {
        category: "Fresh Vegetables",
        domain: "vegetables",
        imgUrl: "/images/cat-2.png"
    },
    {
        category: "Meat & Fish",
        domain: "meat",
        imgUrl: "/images/cat-3.png"
    },
    {
        category: "Snacks",
        domain: "snacks",
        imgUrl: "/images/cat-4.png"
    },
    {
        category: "Beverages",
        domain: "beverages",
        imgUrl: "/images/cat-5.png"
    },
    {
        category: "Beauty & Health",
        domain: "beauty",
        imgUrl: "/images/cat-6.png"
    },
    {
        category: "Bread & Bakery",
        domain: "bakery",
        imgUrl: "/images/cat-7.png"
    },
    {
        category: "Baking Needs",
        domain: "baking",
        imgUrl: "/images/cat-8.png"
    },
    {
        category: "Cooking",
        domain: "cooking",
        imgUrl: "/images/cat-9.png"
    },
    {
        category: "Diabetic Food",
        domain: "food",
        imgUrl: "/images/cat-10.png"
    },
    {
        category: "Dish Detergents",
        domain: "detergents",
        imgUrl: "/images/cat-11.png"
    },
    {
        category: "Oil",
        domain: "oil",
        imgUrl: "/images/cat-12.png"
    }
];

type Product = {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  image: string;
  rating?: number;
};

export const products: Product[] = [
{
    id: 1,
    name: "Green Apple",
    price: 14.99,
    oldPrice: 29.99,
    discount: 50,
    image: "/images/pop-1.png",
    rating: 4,
  },
  {
    id: 2,
    name: "Fresh Indian Malta",
    price: 20.0,
    image: "/images/pop-2.png",
    rating: 5,
  },
  {
    id: 3,
    name: "Chinese cabbage",
    price: 12.0,
    image: "/images/pop-3.png",
    rating: 4,
  },
  {
    id: 4,
    name: "Green Lettuce",
    price: 9.0,
    image: "/images/pop-4.png",
    rating: 4,
  },
  {
    id: 5,
    name: "Eggplant",
    price: 34.0,
    image: "/images/pop-5.png",
    rating: 4,
  },
  {
    id: 6,
    name: "Big Potatoes",
    price: 20.0,
    image: "/images/pop-6.png",
    rating: 4,
  },
  {
    id: 7,
    name: "Corn",
    price: 20.0,
    image: "/images/pop-10.png",
    rating: 5,
  },
  {
    id: 8,
    name: "Fresh Cauliflower",
    price: 12.0,
    image: "/images/pop-7.png",
    rating: 4,
  },
  {
    id: 9,
    name: "Green Capsicum",
    price: 9.0,
    oldPrice: 20.99,
    discount: 50,
    image: "/images/pop-8.png",
    rating: 4,
  },
  {
    id: 10,
    name: "Green Chili",
    price: 34.0,
    image: "/images/pop-9.png",
    rating: 5,
  },
  {
    id: 11,
    name: "Red Chilli",
    price: 50.0,
    image: "/images/pop.png",
    rating: 3,
  },
  {
    id: 12,
    name: "Red Tomatoes",
    price: 20.0,
    oldPrice: 40.0,
    discount: 50,
    image: "/images/pop-11.png",
    rating: 5,
  },
  {
    id: 13,
    name: "Surjapur Mango",
    price: 34.0,
    image: "/images/pop-12.png",
    rating: 4,
  }
];