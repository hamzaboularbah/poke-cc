import { Type } from "./style";
import styled from "styled-components";

const TypeTag = ({ children, ...props }) => {
  return <Type {...props}>{children}</Type>;
};

export default TypeTag;
