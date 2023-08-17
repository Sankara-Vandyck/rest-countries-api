import React, { createContext, useContext, useState } from "react";

interface AppContextType {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  regionFilter: string;
  setRegionFilter: React.Dispatch<React.SetStateAction<string>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [regionFilter, setRegionFilter] = useState("all");

  return (
    <AppContext.Provider value={{ searchTerm, setSearchTerm, regionFilter, setRegionFilter }}>
      {children}
    </AppContext.Provider>
  );
}
