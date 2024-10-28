import { useState } from "react";

export const useInput = (initialState) => {
	const [value, setValue] = useState(initialState);

  const valueSetter = e => {
    setValue(e.target.value)
  };
  return [value, valueSetter]
};
