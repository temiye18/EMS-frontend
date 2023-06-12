import StyledButton from "./styles";

const Button = ({ children, type, onClick, className, variant }) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      className={className}
      $variant={variant}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
