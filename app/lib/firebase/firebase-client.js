import { initializeApp } from 'firebase/app';
import { getFirebaseConfig } from './config';
import { getAuth } from 'firebase/auth';

const app = initializeApp(getFirebaseConfig());

export const auth = getAuth(app);
