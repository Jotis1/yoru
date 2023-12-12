import { createContext, useContext, useState, useEffect } from 'react';
import {
    userStateListener,
    signUpWithEmailAndPassword,
    signOutUser,
    loginWithEmailAndPassword,
    loginWithGithub,
    loginWithGoogle
} from '@/app/lib/firebase/auth';
import { User, UserCredential } from 'firebase/auth';

interface AuthContextProps {
    currentUser: User | null;
    setCurrentUser: (data: User | null) => void;
    signUpWithEmailAndPassword: (
        email: string,
        password: string,
        confirm_password: string,
    ) => Promise<UserCredential>;
    signOutUser: () => void;
    loginWithEmailAndPassword: (
        email: string,
        password: string,
    ) => Promise<UserCredential>;
    loginWithGoogle: () => Promise<UserCredential>;
    loginWithGithub: () => Promise<UserCredential>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    useEffect(() => {
        userStateListener((res: User | null) => {
            setCurrentUser(res);
        });
    });

    return (
        <AuthContext.Provider
            value={{
                currentUser,
                setCurrentUser,
                signUpWithEmailAndPassword,
                loginWithEmailAndPassword,
                signOutUser,
                loginWithGithub,
                loginWithGoogle,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
