import { Sizes } from "./Sizes";

export interface Hoodie {
  id: string;
  name: string;
  price: number;
  rating: number;
  bestseller: boolean;
  sizes: Sizes;
  path_to_image: string;
}

export interface Shirt {
  id: string;
  name: string;
  price: number;
  rating: number;
  bestseller: boolean;
  sizes: Sizes;
  path_to_image: string;
}

export interface Pants {
  id: string;
  name: string;
  price: number;
  rating: number;
  bestseller: boolean;
  sizes: Sizes;
  path_to_image: string;
}
