
import React, { useState } from "react";
import JSONEditor from "./components/JSONEditor";
import FormPreview from "./components/FormPreview";

const App = () => {
  const [formSchema, setFormSchema] = useState({
    formTitle: "Dynamic Form",
    formDescription: "Edit the schema to generate the form",
    fields: [],
  });

  const updateSchema = (newSchema) => {
    setFormSchema(newSchema);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-blue-600 text-white p-4 text-center">
        <h1 className="text-xl font-bold">Dynamic Form Generator</h1>
      </header>
      <main className="flex flex-col md:flex-row flex-grow">
        <div className="md:w-1/2 bg-white p-4 border-r">
          <JSONEditor schema={formSchema} updateSchema={updateSchema} />
        </div>
        <div className="md:w-1/2 bg-gray-50 p-4">
          <FormPreview schema={formSchema} />
        </div>
      </main>
    </div>
  );
};

export default App;
