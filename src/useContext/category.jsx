import React, { createContext, useState } from "react";

const HandleCategory = createContext(() => {});
export const Category=({ children })=> {
  const [category, setCategory] = useState('VN');
  return (
    <HandleCategory.Provider value={{ category, setCategory }}>
      {children}
    </HandleCategory.Provider>
  );
}

export default HandleCategory;