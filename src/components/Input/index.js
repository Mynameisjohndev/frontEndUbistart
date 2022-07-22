import { ContainerInput } from "./styles";

function Input({ placeholder, text, setText, type }) {
  return (
    <ContainerInput
      placeholder={placeholder}
      value={text}
      onChange={(e)=> setText(e.target.value)}
      type={type}
    />
  );
}

export default Input;
