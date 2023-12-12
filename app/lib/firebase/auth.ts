import { auth } from './firebase-client';
import {
    NextOrObserver,
    User,
    UserCredential,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    signInWithPopup,
    GoogleAuthProvider,
    GithubAuthProvider,
    TwitterAuthProvider,
    OAuthProvider
} from 'firebase/auth';

export async function signUpWithEmailAndPassword(
    email: string,
    password: string,
    confirmPassword: string,
): Promise<UserCredential> {
    if (!email || !password || !confirmPassword)
        throw new Error('You must fill all the fields');
    if (password !== confirmPassword) throw new Error('Passwords must match');
    return await createUserWithEmailAndPassword(auth, email, password);
}

export async function loginWithEmailAndPassword(
    email: string,
    password: string,
): Promise<UserCredential> {
    if (!email || !password) throw new Error('You must fill all the fields');
    return await signInWithEmailAndPassword(auth, email, password);
}

export async function loginWithGoogle(): Promise<UserCredential> {
    const provider = new GoogleAuthProvider();
    return await signInWithPopup(auth, provider);
}

export async function loginWithGithub(): Promise<UserCredential> {
    const provider = new GithubAuthProvider();
    provider.addScope('repo');
    return await signInWithPopup(auth, provider);
}

export const userStateListener = (callback: NextOrObserver<User>) => {
    return onAuthStateChanged(auth, callback);
};

export const signOutUser = async (): Promise<void> => await signOut(auth);
