"use client";

import { createContext, useState, useContext, ReactNode } from "react";
import type {
  DreamData,
  DreamValue,
  UserDetails,
  DreamContextType,
} from "@/utils/types";

// Create context with imported type
const DreamContext = createContext<DreamContextType | undefined>(undefined);

/**
 * Custom hook to safely consume DreamContext
 */
export const useDream = (): DreamContextType => {
  const context = useContext(DreamContext);
  if (!context) {
    throw new Error("useDream must be used within a DreamProvider");
  }
  return context;
};

/**
 * Props for DreamProvider
 */
interface DreamProviderProps {
  children: ReactNode;
}

/**
 * Provider component that wraps the app and provides dream-related state
 */
export const DreamProvider: React.FC<DreamProviderProps> = ({ children }) => {
  const [dreamData, setDreamData] = useState<DreamData<DreamValue> | null>(
    null
  );
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
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
