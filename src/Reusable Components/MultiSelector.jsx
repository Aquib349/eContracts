import Select from "react-select";
import PropTypes from "prop-types";
import { useState } from "react";

const MultiSelector = ({ multi, title, options, onChange }) => {
  const [MultiSelectValue, setMultiSelectValue] = useState(null);

  return (
    <>
      <div className="pb-3">
        <label className="text-sm">{title}</label>
        <Select
          defaultValue={MultiSelectValue}
          onChange={onChange}
          options={[
            { label: "Cat", value: "cat" },
            { label: "Apple", value: "apple" },
            { label: "Voomerang", value: "voomerang" },
          ]}
          isMulti={true}
          className="css-control bg-white text-black"
        />
      </div>
    </>
  );
};

MultiSelector.propTypes = {
  multi: PropTypes.bool,
  options: PropTypes.array,
  title: PropTypes.string,
};

export default MultiSelector;
