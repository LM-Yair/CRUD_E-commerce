
export interface Product {
  id?: string;
  name: string;
  slug: string;
  description: string;
  inventory: number;
  price: number;
};

export interface ProductCardProps {
  id: string;
  name: string;
};

export interface ProductToEdit {
  id: string;
  name: string;
  slug: string;
  description: string;
  inventory: number;
  price: number;
};
