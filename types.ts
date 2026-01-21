
export interface Product {
  id: string;
  name: string;
  originalPrice: number;
  discountPrice: number;
  image: string;
  link: string;
  category: string;
  tags: string[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}
