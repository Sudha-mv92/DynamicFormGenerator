import React from "react";

const CopyFormJSONButton = ({ schema }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(schema, null, 2));
    alert("Form JSON copied to clipboard!");
  };

  return (
    <button
      onClick={handleCopy}
      className="mt-4 bg-green-600 text-white py-2 px-4 rounded"
    >
      Copy Form JSON
    </button>
  );
};

export default CopyFormJSONButton;
