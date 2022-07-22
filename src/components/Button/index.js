import { ContainerButton } from "./styles";

function Button({ title, action, ...rest}) {
  return (
    <ContainerButton {...rest}
      onClick={action}
    >
      {title}
    </ContainerButton>
  );
}

export default Button;
