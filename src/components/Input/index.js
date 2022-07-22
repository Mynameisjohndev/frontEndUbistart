import { ContainerInput } from "./styles";

function Input({ placeholder, text, setText }) {
  return (
    <ContainerInput
      placeholder={placeholder}
      value={text}
      onChange={(e)=> setText(e.target.value)}
    />
  );
}

export default Input;
