import React, { createContext, useState } from "react";

const HandleProgess = createContext(() => {});
export const CheckProgess=({ children })=> {
  const [checkProgess, setCheckProgess] = useState(false);
  return (
    <HandleProgess.Provider value={{ checkProgess, setCheckProgess }}>
      {children}
    </HandleProgess.Provider>
  );
}

export default HandleProgess;
