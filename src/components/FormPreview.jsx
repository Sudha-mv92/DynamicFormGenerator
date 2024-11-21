import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FormField from "./FormField";
import CopyFormJSONButton from "./CopyFormJSONButton";
import DownloadFormJSONButton from "./DownloadFormJSONButton";

const FormPreview = ({ schema }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submissionData, setSubmissionData] = useState(null);

  const onSubmit = (data) => {
    setSubmissionData(data); // Store form submission data
    console.log("Form Data Submitted:", data);
    alert("Form Submitted Successfully!");
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-2">{schema.formTitle}</h2>
      <p className="mb-4 text-sm text-gray-700">{schema.formDescription}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        {schema.fields.map((field) => (
          <FormField
            key={field.id}
            field={field}
            register={register}
            errors={errors}
          />
        ))}
        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>

      {/* Buttons for additional features */}
      <CopyFormJSONButton schema={schema} />
      {submissionData && <DownloadFormJSONButton submissionData={submissionData} />}
    </div>
  );
};

export default FormPreview;
