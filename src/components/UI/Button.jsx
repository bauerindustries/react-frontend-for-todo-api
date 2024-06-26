import './Button.module.css';

const Button = (props) => {
  return (
    <button
      type={props.type || 'button'}
      data-id={props.id}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
