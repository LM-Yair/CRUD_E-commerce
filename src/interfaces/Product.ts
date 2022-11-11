import {ProductAction} from "../hooks/useProductAction";

export interface Product {
  id?: string;
  name: string;
  slug: string;
  description: string;
  inventory: number;
  price: number;
};

export interface ProductCartRaw {
  id: string;
  productId: string;
}

export interface ProductToCart {
  id?: string;
  name: string;
  slug: string;
  inventory: number;
  price: number;
};

export interface ProductCardProps {
  id: string;
  name: string;
  addToCart: ProductAction;
};

export interface ProductToEdit {
  id: string;
  name: string;
  slug: string;
  description: string;
  inventory: number;
  price: number;
};
