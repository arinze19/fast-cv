import { createContext, useState } from 'react';

export const MainContext = createContext();

export function MainContextProvider({ children }) {
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    location: '',
    phoneNumber: '',
    linkedin: '',
    website: '',
    skills: [],
    experience: [],
    qualifications: [],
  };

  const [cvInfo, setCvInfo] = useState(initialState)
  return (
    <MainContext.Provider value={{cvInfo, setCvInfo}}>
      {children}
    </MainContext.Provider>
  );
}
