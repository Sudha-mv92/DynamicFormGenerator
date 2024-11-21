import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-github";

const JSONEditor = ({ schema = {}, updateSchema }) => {
  const [error, setError] = useState(null); // Track JSON validation errors

  const handleEditorChange = (value) => {
    try {
      const parsed = JSON.parse(value); // Parse JSON input
      setError(null); // Clear error if valid JSON
      updateSchema(parsed); // Call updateSchema with parsed JSON
    } catch (err) {
      setError("Invalid JSON: " + err.message); // Display error if invalid
    }
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-2">JSON Editor</h2>
      <AceEditor
        mode="json"
        theme="github"
        value={JSON.stringify(schema, null, 2)} // Prettify JSON schema for editor
        onChange={handleEditorChange}
        name="json-editor"
        width="100%"
        height="400px"
        editorProps={{ $blockScrolling: true }}
      />
      {error && <p className="text-red-500 mt-2">{error}</p>} {/* Display error message */}
    </div>
  );
};

export default JSONEditor;

