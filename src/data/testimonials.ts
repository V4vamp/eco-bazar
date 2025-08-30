export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  review: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Robert Fox",
    role: "Customer",
    image: "/images/test-1.png",
    review:
      "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget.",
    rating: 5,
  },
  {
    id: 2,
    name: "Dianne Russell",
    role: "Customer",
    image: "/images/test-2.png",
    review:
      "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget.",
    rating: 5,
  },
  {
    id: 3,
    name: "Eleanor Pena",
    role: "Customer",
    image: "/images/test-3.png",
    review:
      "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget.",
    rating: 5,
  },
];
