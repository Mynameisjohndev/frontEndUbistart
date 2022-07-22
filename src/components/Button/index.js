import { ContainerButton } from "./styles";

function Button({ title, action}) {
  return (
    <ContainerButton
      onClick={action}
    >
      {title}
    </ContainerButton>
  );
}

export default Button;
