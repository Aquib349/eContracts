import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const ValueFinancialsField = ({
  title,
  name,
  baseline,
  required,
  fieldname,
  validate,
  initialValue,
}) => {
  const [ValueFinancials, setValueFinancials] = useState(0);

  useEffect(() => {
    if (initialValue !== undefined) {
      setValueFinancials(initialValue);
    }
  }, [initialValue]);

  useEffect(() => {
    if (validate) {
      validate(fieldname, ValueFinancials, required);
    }
  }, [validate, required, fieldname]);

  const handleChange = (e) => {
    const newValue = parseFloat(e.target.value);
    setValueFinancials(newValue);
    validate(fieldname, newValue, required);
  };

  return (
    <div className="flex flex-col pb-3">
      <label className="text-sm">
        {title}
        {required === "true" && (
          <span className="font-bold text-red-500">*</span>
        )}
      </label>
      <input
        type="number"
        name={name}
        value={ValueFinancials}
        className="w-full rounded-md border border-slate-400 p-2 text-sm outline-blue-500"
        onChange={handleChange}
      />
      <small className="text-slate-500">{baseline}</small>
    </div>
  );
};

ValueFinancialsField.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.number,
  baseline: PropTypes.string,
  required: PropTypes.string,
  fieldname: PropTypes.string.isRequired,
  validate: PropTypes.func,
  initialValue: PropTypes.number,
};

export default ValueFinancialsField;
