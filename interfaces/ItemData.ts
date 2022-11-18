import { Sizes } from "./Sizes";

export interface ItemData {
  name: string;
  price: number;
  rating: number;
  bestseller: boolean;
  sizes: Sizes;
  path_to_image: string;
}
