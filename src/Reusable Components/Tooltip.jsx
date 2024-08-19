import PropTypes from "prop-types";
import React from "react";

function Tooltip({ Title, content, position }) {
  const tooltipWidth = Math.min(
    120,
    content?.length > 7 ? content?.length * 8 : content?.length * 13
  );

  return (
    <div className="group relative inline-block z-0">
      <div className="pt-1 cursor-pointer" aria-label={content}>
        {Title}
      </div>
      <div
        className={`tooltip invisible absolute -translate-x-1/2 transform rounded
         bg-black py-1 text-center text-xs font-medium text-white opacity-0 shadow-md group-hover:visible
          group-hover:opacity-100 ${position === "bottom" ? "-bottom-8 -left-1/2" : "bottom-full left-1/2"}`}
        style={{ width: tooltipWidth || 0 }}
      >
        {content}
      </div>
    </div>
  );
}

Tooltip.propTypes = {
  content: PropTypes.string.isRequired,
  Title: PropTypes.node.isRequired,
};

export default Tooltip;
