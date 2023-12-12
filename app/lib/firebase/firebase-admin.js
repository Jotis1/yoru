import admin from 'firebase-admin';
import { getAuth } from 'firebase-admin/auth';

var serviceAccount = require('./yoru-firebase.json');

const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export const auth = getAuth(app);
