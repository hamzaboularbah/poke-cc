import { Container } from "./style";
import { Hourglass } from "react-spinners-css";

const Spinner = ({ color }) => {
  return (
    <Container>
      <Hourglass color={color} />
    </Container>
  );
};

export default Spinner;
