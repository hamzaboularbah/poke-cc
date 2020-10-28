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
const MultiSelect = ({
  options,
  placeholder,
  isLoading,
  isLoadingMessage,
  onChange,
}) => {
  return (
    <Select
      loadingMessage={isLoadingMessage}
      isLoading={isLoading}
      styles={styles}
      placeholder={placeholder}
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      options={options}
      onChange={(e) => onChange(e)}
    />
  );
};

export default MultiSelect;
