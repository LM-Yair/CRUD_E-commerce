import {useState} from "react";

import {FormProps} from "../interfaces/Form";
import {Product} from "../interfaces/Product";
import {inizializedFormData, updateFormData} from "../utils/form";
import {FormInput} from "./FormInput";
import {FormSubmit} from "./FormSubmit";
import {validateProductShape} from "../utils/products";
import {useRouter} from "next/router";

export const Form = ({ title, product, formAction }: FormProps) => {
  const router = useRouter();
  const [formData, setFormData] = useState(inizializedFormData( title, product ));

  const returnToInicioPage = () => router.push("/");

  const change = (e: React.BaseSyntheticEvent) => {
    const productInCreation: Product = {
      ...formData.product,
      [e.target.name]: e.target.value,
    };
    const newFormState = updateFormData(productInCreation, formData);
    setFormData(newFormState);
  }
  
  const submit = async (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    const validationRes = validateProductShape(formData.product);
    if(validationRes.success){
      const product = await formAction(formData.product);
      console.log(':)',{product});
      returnToInicioPage();
    }
      console.log(':( revisa tus datos');
  }
  return(
    <div className="w-full">
      <h2 className='text-center text-xl'>{title}</h2>
      <form onSubmit={submit} className="p-2 w-full sm:mx-auto sm:w-96 flex flex-col justify-center gap-2">
	<FormInput 
	  type="text"  
	  value={formData.product.name} 
	  name="name" 
	  action={change} 
	  placeholder="Nombre" 
	  label={true}
	/>
	<FormInput 
	  type="text"
	  value={formData.product.slug} 
	  name="slug" 
	  readOnly={true} 
	  placeholder="Slug" 
	  label={true}
	/>
	<FormInput 
	  type="text"  
	  value={formData.product.description} 
	  name="description" 
	  action={change} 
	  placeholder="Descripción" 
	  label={true}
	/>
	<FormInput 
	  type="number"  
	  value={formData.product.inventory} 
	  name="inventory" 
	  action={change} 
	  placeholder="Inventario" 
	  label={true}
	/>
	<FormInput 
	  type="number"  
	  value={formData.product.price} 
	  name="price" 
	  action={change} 
	  placeholder="Precio MXN" 
	  label={true}
	/>
	<FormSubmit 
	  value={title} 
	  formStatus={formData.formStatus}
	/>
      </form>
    </div>
  );
}
