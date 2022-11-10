
interface Action {
  (event:React.BaseSyntheticEvent): void;
}

interface FormInputProps {
  name: string;
  type: string;
  label: boolean;
  value: any;
  placeholder: string;
  action?: Action;
  readOnly?: boolean;
}

export const FormInput = ({ 
  name, 
  type, 
  value, 
  placeholder, 
  action, 
  readOnly = false, 
  label = false 
  }: FormInputProps) => {
  if(readOnly) return(
    <>
      {label && (<label htmlFor={name}>{placeholder}</label>)}
        <input 
	  id={name}
	  className="p-2 rounded-lg outline-0 bg-neutral-200 border border-neutral-600/75 opacity-70"
	  type={type}  
	  value={value} 
	  name={name} 
	  readOnly={true}
	/>
    </>
  );
  return(
    <>
    {label && (<label htmlFor={name}>{placeholder}</label>)}
      <input 
	id={name}
	className="p-2 rounded-lg outline-0 bg-neutral-200 border border-neutral-600/75"
	type={type}  
	value={value} 
	name={name} 
	onChange={action}
      />
  </>
  );
}
