import {FORM_STATE} from "../CONSTANTS/FORM_STATE";

interface FormInputProps {
  value: string;
  formStatus: boolean;
}

export const FormSubmit = ({ value, formStatus = false }: FormInputProps) => {
  if(formStatus === FORM_STATE.INCOMPLETE){
    return(
      <input 
	className="p-2 px-4 text-neutral-200 rounded-lg outline-0 bg-neutral-400 cursor-not-allowed pointer-events-none select-none"
	type="submit" 
	value={value}
	disabled={true}
      />
    );
  }
  return(
      <input 
	className="p-2 px-4 text-neutral-200 rounded-lg outline-0 bg-neutral-600 cursor-pointer"
	type="submit" 
	value={value}
      />
  );
}
