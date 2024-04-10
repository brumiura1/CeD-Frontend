"use client";
import { ReactNode, createContext, useContext, useState } from 'react';
import { FirebaseContext } from './firebase.context';
import { User } from '../interfaces/user.type';
import { redirect } from 'next/navigation';
import { DisplayUser } from '../interfaces/displayUser.type';

interface WorkshopContextData {

}

interface WorkshopProviderProps {
    children: ReactNode
}

export const WorkshopContext = createContext<WorkshopContextData>({} as WorkshopContextData);

export function AuthProvider({ children }: WorkshopProviderProps) {

    return (
        <WorkshopContext.Provider
            value={{}}>
            {children}
        </WorkshopContext.Provider>
    );
}

export default AuthProvider;