
export interface Product {
  id?: string;
  name: string;
  slug: string;
  description: string;
  inventory: number;
  price: number;
};

export interface ProductToEdit {
  id: string;
  name: string;
  slug: string;
  description: string;
  inventory: number;
  price: number;
};
