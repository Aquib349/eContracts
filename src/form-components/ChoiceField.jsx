import Select from "react-select";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const ChoiceField = ({
  options,
  title,
  baseline,
  required,
  fieldname,
  validate,
  initialValue,
}) => {
  const [ChoiceOption, setChoiceOption] = useState(null);

  useEffect(() => {
    if (initialValue) {
      const initialOption = options.find(
        (option) => option.label === initialValue,
      );
      if (initialOption) {
        setChoiceOption(initialOption);
      }
    }
  }, [initialValue, options]);

  useEffect(() => {
    if (validate) {
      validate(fieldname, ChoiceOption ? ChoiceOption.label : null, required);
    }
  }, [validate, fieldname, required]);

  const handleChange = (selectedOption) => {
    setChoiceOption(selectedOption);
    validate(fieldname, selectedOption.label, required);
  };

  return (
    <>
      <div className="pb-3">
        <label className="text-sm">
          {title}
          {required === "true" && (
            <span className={`font-bold text-red-500`}>*</span>
          )}
        </label>
        <Select
          className={`w-full rounded-md border border-slate-400 p-2 text-sm outline-blue-400`}
          defaultValue={ChoiceOption}
          onChange={handleChange}
          options={options}
          value={ChoiceOption}
        />
        <small className="text-slate-500">{baseline}</small>
      </div>
    </>
  );
};

ChoiceField.propTypes = {
  options: PropTypes.array,
  title: PropTypes.string,
  baseline: PropTypes.string,
  required: PropTypes.string,
  validate: PropTypes.func,
  fieldname: PropTypes.string,
  initialValue: PropTypes.string, // Add initialValue to prop types
};

export default ChoiceField;
