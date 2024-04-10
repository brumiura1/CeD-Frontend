"use client";
import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { FirebaseContext } from './firebase.context';
import { User } from '../interfaces/user.type';
import { redirect } from 'next/navigation';
import { DisplayUser } from '../interfaces/displayUser.type';

interface AuthContextData {
    login: (email: string, password: string) => Promise<any>;
    logout: () => Promise<any>;
    signUp: (email: string, password: string) => Promise<any>;
    currentUser: DisplayUser | undefined;
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {

    const { app } = useContext(FirebaseContext);
    const auth = getAuth(app);
    const [currentUser, setCurrentUser] = useState<DisplayUser>();

    async function logout() {
        await signOut(auth)
            .then(() => {
                setCurrentUser(undefined);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                throw (`${errorCode}: ${errorMessage}`);
            })
    }

    async function signUp(email: string, password: string) {
        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setCurrentUser({
                    email: userCredential.user.email!,
                    name: "Temp",
                    id: userCredential.user.uid
                })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            })

    }

    async function login(email: string, password: string) {
        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setCurrentUser({
                    email: userCredential.user.email!,
                    name: "Temp",
                    id: userCredential.user.uid
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                throw (`${errorCode}: ${errorMessage}`);
            })
    }

    return (
        <AuthContext.Provider
            value={{ login, logout, signUp, currentUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;