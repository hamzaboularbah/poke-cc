import { Container } from "./style";
import { Hourglass } from "react-spinners-css";

const Spinner = ({ color }) => {
  return (
    <Container data-testid={"loading-spinner"}>
      <Hourglass color={color} />
    </Container>
  );
};

export default Spinner;
