export interface ImageArr {
  images: string;
}

export interface ProductGet {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;   
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: ImageArr[];
}
export interface Iproduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: ImageArr[];
}
export interface StateProductsModel {
  products: ProductGet[];
  total: number;
  skip: number;
  limit: number;
}
export interface IUpdateProductDetail {
  brand:string
  description: string;
  price: number;
  rating: number;
  title: string;
}
