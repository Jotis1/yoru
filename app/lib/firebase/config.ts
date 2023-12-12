const config = {
  apiKey: 'AIzaSyAPUC7-YUMeC0jqLfzb3fs8ECmx7ZgpO5I',
  authDomain: 'yoru-379102.firebaseapp.com',
  projectId: 'yoru-379102',
  storageBucket: 'yoru-379102.appspot.com',
  messagingSenderId: '1093951362614',
  appId: '1:1093951362614:web:720b724ea46f3928c1ea97',
  measurementId: 'G-572LK6VVFN',
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error(
      'No Firebase configuration object provided.' +
        '\n' +
        "Add your web app's configuration object to firebase-config.ts",
    );
  } else {
    return config;
  }
}
