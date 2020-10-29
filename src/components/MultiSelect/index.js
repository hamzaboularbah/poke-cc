import Select from "react-select";
import makeAnimated from "react-select/animated";
const animatedComponents = makeAnimated();

const styles = {
  placeholder: (base) => {
    return {
      ...base,
      color: "rgba(0,0,0,0.3)",
    };
  },
  control: (base) => ({
    ...base,
    border: 0,
    boxShadow: "none",
  }),
};

const MultiSelect = (props) => {
  return (
    <Select
      styles={styles}
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      {...props}
    />
  );
};

export default MultiSelect;
