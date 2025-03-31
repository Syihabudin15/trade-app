"use client";

import { createContext, useContext, useState } from "react";
import { IUser } from "../IInterfaces";

export interface IUserContext extends IUser {
  getUser: Function;
}

const userContext = createContext<IUserContext | null>(null);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>();

  const getUser = async () => {
    await fetch("/api/auth")
      .then((res) => res.json())
      .then((res) => {
        setUser(res.data);
        return res.data;
      });
  };

  return (
    <userContext.Provider value={user ? { ...user, getUser } : null}>
      {children}
    </userContext.Provider>
  );
};

export const useUser = () => useContext(userContext);
