import './Button.css';

type ButtonType = 'submit' | 'reset' | 'button';

interface ButtonProps {
  type?: ButtonType;
}

const Button = ({ type = 'submit' }: ButtonProps) => {
  return (
    <button className='button' type={type}>
      Get Early Access
    </button>
  );
};

export default Button;
