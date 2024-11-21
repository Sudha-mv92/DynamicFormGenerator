
import { useState } from "react";

const useFormSchema = (initialSchema) => {
  const [schema, setSchema] = useState(initialSchema);

  const updateSchema = (newSchema) => {
    setSchema(newSchema);
  };

  return [schema, updateSchema];
};

export default useFormSchema;
