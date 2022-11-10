import {Product} from "./Product";

export interface FormStatus {
  COMPLETE: boolean;
  INCOMPLETE: boolean;
}

export interface FormState {
  title: string;
  product: Product;
  formStatus: boolean;
}

interface FormAction {
  (product: Product): any;
}

export interface FormProps {
  title: string;
  product?: Product;
  formAction: FormAction;
}
