type News = {
  id: number;
  date: { day: number; month: string };
  category: string;
  author: string;
  comments: number;
  title: string;
  image: string;
};

export const latestNews: News[] = [
  {
    id: 1,
    date: { day: 18, month: "Nov" },
    category: "Food",
    author: "Admin",
    comments: 65,
    title:
      "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
    image: "/images/news-1.png",
  },
  {
    id: 2,
    date: { day: 29, month: "Jan" },
    category: "Food",
    author: "Admin",
    comments: 65,
    title: "Eget lobortis lorem lacinia. Vivamus pharetra semper,",
    image: "/images/news-2.png",
  },
  {
    id: 3,
    date: { day: 21, month: "Feb" },
    category: "Food",
    author: "Admin",
    comments: 65,
    title: "Maecenas blandit risus elementum mauris malesuada.",
    image: "/images/news-3.png",
  },
];
