import React from "react";

const DownloadFormJSONButton = ({ submissionData }) => {
  const handleDownload = () => {
    const blob = new Blob([JSON.stringify(submissionData, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "form-submission.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={handleDownload}
      className="mt-4 bg-purple-600 text-white py-2 px-4 rounded"
    >
      Download Form JSON
    </button>
  );
};

export default DownloadFormJSONButton;
