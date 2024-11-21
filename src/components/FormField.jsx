import React from "react";

const FormField = ({ field, register, errors }) => {
  const { id, type, label, placeholder, required, options, validation } = field;

  if (type === "select" || type === "radio") {
    return (
      <div className="mb-4 dark:bg-gray-800 dark:text-white">
        <label className="block font-bold mb-2">{label}</label>
        {options.map((option) => (
          <label key={option.value} className="block">
            <input
              type={type}
              value={option.value}
              {...register(id, { required })}
              className="mr-2 dark:bg-gray-700 dark:text-white"
            />
            {option.label}
          </label>
        ))}
        {errors[id] && <p className="text-red-600 dark:text-red-400">{errors[id].message}</p>}
      </div>
    );
  }

  return (
    <div className="mb-4 dark:bg-gray-800 dark:text-white">
      <label className="block font-bold mb-2">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        {...register(id, { required, pattern: validation?.pattern })}
        className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
      />
      {errors[id] && (
        <p className="text-red-600 dark:text-red-400">{validation?.message || "This field is required"}</p>
      )}
    </div>
  );
};

export default FormField;
