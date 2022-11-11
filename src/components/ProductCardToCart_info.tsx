type ProductCardToCartProps = {
  type?: string;
}

export const ProductCardToCart_info = ({type}:ProductCardToCartProps) => {
  if(type === 'error'){
  return(
    <div className="p-2">
      <p>Lo siento ocurrió un error al intentar recuperar los datos de este producto</p>
    </div>
  );
  }
  return(
    <div className="p-2">
      <p>Cargando producto</p>
    </div>
  );
}
