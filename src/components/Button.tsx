
interface Action {
  (event:any): void;
}

interface ButtonProps {
  text: String;
  action: Action;
}

export const Button = ({ text, action }: ButtonProps) => {
  return(
    <button onClick={action}
      className='p-2 rounded-xl border border-neutral-600 hover:bg-neutral-600 hover:text-neutral-100'
    >
      { text }
    </button>
  );
}
