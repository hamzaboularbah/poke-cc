import { Type } from "./style";

const TypeTag = ({ children, ...props }) => {
  return <Type {...props}>{children}</Type>;
};

export default TypeTag;
