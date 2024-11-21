import './Input.css';

type InputType =
  | 'text'
  | 'password'
  | 'email'
  | 'number'
  | 'tel'
  | 'url'
  | 'search'
  | 'date'
  | 'time'
  | 'datetime-local'
  | 'month'
  | 'week'
  | 'color';

interface InputProps {
  type?: InputType;
  name?: string;
  placeholder?: string;
}

const Input = ({ type = 'text', name, placeholder }: InputProps) => {
  return <input type={type} name={name} placeholder={placeholder} />;
};

export default Input;
