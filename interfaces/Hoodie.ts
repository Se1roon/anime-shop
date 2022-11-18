export interface Hoodie {
  id: string;
  name: string;
  price: number;
  rating: number;
  bestseller: boolean;
  sizes: Sizes;
  path_to_image: string;
}
