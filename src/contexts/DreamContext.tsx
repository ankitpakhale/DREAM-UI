"use client";

import { createContext, useState, useContext, ReactNode } from "react";

interface DreamData<T = any> {
  status: boolean;
  payload: T;
  message: string;
  status_code: number;
}

interface UserDetails {
  name: string;
  phone: number;
  age: number;
  email: string;
}

interface DreamContextType {
  dreamData: DreamData;
  setDreamData: React.Dispatch<React.SetStateAction<any>>;
  userDetails: UserDetails;
  setUserDetails: React.Dispatch<React.SetStateAction<any>>;
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  responseMessage: string | null;
  setResponseMessage: React.Dispatch<React.SetStateAction<string | null>>;
}

const DreamContext = createContext<DreamContextType | undefined>(undefined);

export const useDream = () => {
  const context = useContext(DreamContext);
  if (!context) {
    throw new Error("useDream must be used within a DreamProvider");
  }
  return context;
};

// Type for provider props
interface DreamProviderProps {
  children: ReactNode;
}

export const DreamProvider: React.FC<DreamProviderProps> = ({ children }) => {
  const [dreamData, setDreamData] = useState<any>(null);
  const [userDetails, setUserDetails] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);

  return (
    <DreamContext.Provider
      value={{
        dreamData,
        setDreamData,
        userDetails,
        setUserDetails,
        error,
        setError,
        responseMessage,
        setResponseMessage,
      }}
    >
      {children}
    </DreamContext.Provider>
  );
};

export default DreamProvider;
